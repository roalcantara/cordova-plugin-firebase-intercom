import { expect, Fixture } from '../../'

import { AndroidManifestUtils } from '../../../src/scripts/utils'

describe('AndroidManifestUtils', () => {
  let editor: AndroidManifestUtils

  describe('#removeServiceNodeBy', () => {
    let manifest: string

    beforeEach(() => {
      manifest = Fixture.read('AndroidManifest.xml')
      editor = new AndroidManifestUtils(manifest)
    })

    it('removes a service node by name', () => {
      editor.removeServiceNodeBy({ name: 'org.apache.cordova.firebase.FirebasePluginInstanceIDService' })

      expect(editor.toString()).to.not
        .include(`<service android:name="org.apache.cordova.firebase.FirebasePluginInstanceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
            </intent-filter>
        </service>`)
    })

    context('when a unknown service name is given', () => {
      it('does not do anything', () => {
        editor.removeServiceNodeBy({ name: 'org.apache.cordova.firebase.FirebasePluginInstanceIDServiceFoo' })

        expect(editor.toString()).to
          .include(`<service android:name="org.apache.cordova.firebase.FirebasePluginInstanceIDService">
            <intent-filter>
                <action android:name="com.google.firebase.INSTANCE_ID_EVENT" />
            </intent-filter>
        </service>`)
      })
    })
  })
})

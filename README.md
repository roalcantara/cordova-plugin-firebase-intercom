# cordova-plugin-firebase-intercom

A simple cordova plugin that integrates [Firebase](https://github.com/arnesson/cordova-plugin-firebase) and [Intercom](https://github.com/intercom/intercom-cordova) cordova plugins, allowing to send and receive Intercom's Push Notifications on Android's devices.

Heavily based on Intercom's FCM [documentation](https://developers.intercom.com/installing-intercom/docs/android-fcm-push-notifications#section-step-7-using-intercom-with-other-fcm-setups-optional).

## Installation

**1.** Add to your project

```sh
cordova plugin add https://github.com/roalcantara/cordova-plugin-firebase-intercom
```

**2.** Sets your FCM icon (optional)

As explained on Intercom's [docs](https://developers.intercom.com/installing-intercom/docs/android-fcm-push-notifications#section-step-4-setting-your-fcm-icon), an image named `intercom_push_icon.png` must be added for each supported density.

Let's say your app supports xxhdpi, xhdpi, hdpi and mdpi. In this case, your would:

**2.1** Add each supported icon on the respective resource folder, that is:

```txt
/your-awesome-app/resources/android/drawable-hdpi/notification_icon.png
/your-awesome-app/resources/android/drawable-mdpi/notification_icon.png
/your-awesome-app/resources/android/drawable-xhdpi/notification_icon.png
/your-awesome-app/resources/android/drawable-xxhdpi/notification_icon.png
```

**2.2** Add the icons references on config.xml:

```xml
<resource-file src="resources/android/drawable-mdpi/intercom_push_icon.png" target="app/src/main/res/drawable-mdpi/intercom_push_icon.png" />
<resource-file src="resources/android/drawable-hdpi/intercom_push_icon.png" target="app/src/main/res/drawable-hdpi/intercom_push_icon.png" />
<resource-file src="resources/android/drawable-xhdpi/intercom_push_icon.png" target="app/src/main/res/drawable-xhdpi/intercom_push_icon.png" />
<resource-file src="resources/android/drawable-xxhdpi/intercom_push_icon.png" target="app/src/main/res/drawable-xxhdpi/intercom_push_icon.png" />
<resource-file src="resources/android/drawable-xxxhdpi/notification_icon.png" target="app/src/main/res/drawable-xxxhdpi/notification_icon.png" />
```

**3.** And build the project

```sh
cordova build android
```

## Development

1. `$ git clone https://github.com/roalcantara/cordova-plugin-firebase-intercom.git` - Clone the project
2. `$ cd cordova-plugin-firebase-intercom` - Go into the project folder
3. `$ npm run install` - Install all dependencies

## Running specs

`$ npm run test` to run the specs

## How to contribute

- Bug reports and pull requests are welcome on [GitHub](https://github.com/roalcantara/cordova-plugin-firebase-intercom)
- Follow the [Semantic Versioning Specification](http://semver.org/)
- Follow the [GitHub Flow](https://guides.github.com/introduction/flow/)
- Follow the [5 Useful Tips For A Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message) article and the [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/) post
- Use [Commitizen cli](http://commitizen.github.io/cz-cli/) when committing

## Code of Conduct

Everyone interacting in the cordova-plugin-firebase-intercom project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/roalcantara/cordova-plugin-firebase-intercom/blob/master/CODE_OF_CONDUCT.md).

## License

The package is available as open source under the terms of the [MIT](https://opensource.org/licenses/MIT) license.

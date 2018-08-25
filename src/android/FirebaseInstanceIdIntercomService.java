package com.roalcantara.firebase.intercom;

import com.google.firebase.iid.FirebaseInstanceId;
import org.apache.cordova.firebase.FirebasePluginInstanceIDService;

import io.intercom.android.sdk.push.IntercomPushClient;

public class FirebaseInstanceIdIntercomService extends FirebasePluginInstanceIDService {
  private static final String TAG = "FirebaseIntercomPlugin";
  private final IntercomPushClient intercomPushClient = new IntercomPushClient();

  @Override
  public void onTokenRefresh() {
    String refreshedToken = FirebaseInstanceId.getInstance().getToken();
    this.intercomPushClient.sendTokenToIntercom(super.getApplication(), refreshedToken);

    super.onTokenRefresh();
  }
}
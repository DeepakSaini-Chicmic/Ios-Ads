import { _decorator, Component, Node, native } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Main")
export class Main extends Component {
  start() {}

  loadInterstitialAd() {
    console.log("Load Interstitial Ads Button Clicked");
    native.reflection.callStaticMethod(
      "AppDelegate",
      "callInterstitialNativeUIWithTitle:andContent:",
      "cocos2d-js",
      "Yes! you call a Native UI from Reflection"
    );
  }

  loadBannerAd() {
    console.log("Load Banner Ads Button Clicked");
    native.reflection.callStaticMethod(
      "AppDelegate",
      "callBannerNativeUIWithTitle:andContent:",
      "cocos2d-js",
      "Yes! you call a Native UI from Reflection"
    );
  }

  loadRewardedAd() {
    console.log("Load Banner Ads Button Clicked");
    native.reflection.callStaticMethod(
      "AppDelegate",
      "callRewardNativeUIWithTitle:andContent:",
      "cocos2d-js",
      "Yes! you call a Native UI from Reflection"
    );
  }
  update(deltaTime: number) {}
}

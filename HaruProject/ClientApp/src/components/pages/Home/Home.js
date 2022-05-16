import React, { Component } from "react";
import HomeSlideSection from "../../UI/organisms/Section/Home_Slide_Section";
import HomeAboutSection from "../../UI/organisms/Section/Home_About_Section";
import HomeClientSection from "../../UI/organisms/Section/Home_Client_Section";
import HomeContactSection from "../../UI/organisms/Section/Home_Contact_Section";
import HomeFeatureSection from "../../UI/organisms/Section/Home_Feature_Section";
import HomeShopSection from "../../UI/organisms/Section/Home_Shop_Section";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <React.Fragment>
        <HomeSlideSection />
        <HomeShopSection />
        <HomeAboutSection />
        <HomeFeatureSection />
        <HomeContactSection />
        <HomeClientSection />
      </React.Fragment>
    );
  }
}

//we want to fetch the token when the page loads
import AsyncStorage from "@react-native-async-storage/async-storage";
//const jwtDecode = require("jwt-decode");
import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import FormStyles from "./FormStyles";
import Card from "./ui_components/Card";
const styles = FormStyles;

const ExperienceScreen = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      //make use of decoded data. useState
      setFullName(decoded.fullName);
      setEmail(decoded.email);
    }
  };

  useEffect(() => {
    loadProfile();
  });

  var auth = useSelector((state) => state.auth.authorized);
  if (!auth) {
    return (
      <View style={styles.warning_wrapper}>
        <Text style={styles.warning_text}>
          Sorry, you need to register for an account to see this page.
        </Text>
        <Button
          onPress={() => props.navigation.navigate("Register")}
          title="Register"
          style={styles.redirect_button}
        />
      </View>
    );
  }

  // return (
  //   <View style={styles.container}>
  //   <View>
  //     <Text style={styles.text}>
  //       Home Screen: Welcome {fullName ? fullName : ""}
  //     </Text>
  //   </View>
  //   <View>
  //     <Text style={styles.text}>Your email is {email ? email : ""}</Text>
  //   </View>
  // </View>
  // );

  //const parkseedExperience="At Park Seed, I was the lead UI/UX designer managing one other designer. I worked with an e-commerce platform that was built in a proprietary language, and created frontend design features with javascript, html, and css on the front end that was desired by management. One major project was implementing a ‘gifting’ feature and creating a calendar for shipping the gifts."
  //const codigoExperience=`At Codigo I created a digital signage app that would engage customers in the lobby of businesses, to post ‘thoughts’ and ‘images’ in real time according to ‘Campaign Themes’ set up by app administrators.
  //It featured a backend for admin management , as well as a factory design pattern, designed to handle a variety of ‘animations’ involving the different types of text, images , and background elements that would be featured on screen, all moving at different rates of speed and at varying sizes. It also had a database polling feature which handled the ‘real time’ presentation of new posts. The backend was PHP and MySQL, while the frontend was mainly vanilla javascript and jQuery.`

  //const advancedSolutionsExperience=`At Advanced Solutions I helped convert a variety of websites for their subsidiaries over to Wordpress, so that they could be more easily managed by the marketing department. I also encouraged the use of Docker to maintain a consistent environment for all of the sites.`
  //const thinkfulExperience=`Thinkful is an online learning resource for modern web development skills. I mentored students in javascript and React. I also graded student work and provided feedback and guidance as to how to complete their tasks. I was pleasantly surprised at the sense of satisfaction I felt helping people learn a new skill to improve their lives.`
  //const connectExperience=`At Connect I helped design the database schema and defined which technology we would use for our database and API. I’ve handled the server administration , as well as, managing a small group of developers remotely using Trello and BitBucket. We are using MySQL and an ORM called Sequelize that handles the database seeding and migrations. I also am writing the swift code for the iPhone client that will use the service and I will be guiding us through the iTunes store submission and deployment.`
  //const adderMobileExperience=`Adder Mobile was a start-up. We started from scratch using different technology. I advised them on which technologies would serve us best. We decided on ReactJS for the frontend, NodeJS for the backend, and MongoDB for the database. We then began , at an urgent pace, building their system. With great coordination and teamwork, we had an MVP completed in approximately four months that the sales team was then able to begin explaining the service we had created more clearly to potential customers and investors. I believe the progress we made definitely influenced the investments that we received after the MVP was completed.`
  //const eltoroExperience=`El Toro hired me just before the covid pandemic struck. They were growing rapidly and try also trying to increase their velocity in the development of a political portal, for targeted advertising, in time for this political season. I helped them make that happen as part of a large team of front end developers working in coordination with a separate API team, and other logistics teams as well. We were using a typescript version of React to create the frontend, along with SASS. I helped create UI tests with Selenium as well as some integration testing with puppeteer.
  //After that project was completed I started working with another team in Quality Assurance creating API tests in both Postman and SoapUI. I also helped with the ‘automation’ of certain processes in our Atlassian suite mainly with Jira Service Desks, Boards, and Confluence spaces. I started using the ‘Go lang’ because we were using it to handle some of the processes in an AWS lambda. Unfortunately, they needed to downsize and my entire team got let go.`
  const adderMobileExperience = `At Adder I helped create the frontend for their app using React and an existing react dashboard framework. I also used express API and MongoDB for backend integration. `;
  const eltoroExperience = `At El Toro I worked with a combination of Typescript React and Puppeteer for testing the frontend. In addition to that I used Selenium for frontend UI testing and spent some time working with Postman for API testing. `;
  const connectExperience = `At Connect,LLC. I designed the database schema, the express api, set up a server for development on Digital Ocean. I also wrote Swift code for the iOS app and made sure all libraries used were well documented.`;
  const parkseedExperience = `At Parkseed I was the lead UI/UX developer which mostly involved using javascript to create the additional custom functionality needed for the existing e-commerce framework.`;
  const advancedSolutionsExperience = `At Advanced Solutions I converted their existing website, including a few of their subsidiaries, into wordpress sites that could be managed more easily by their marketing team. I also helped integrate subscriptions into their wordpress sites. `;
  const thinkfulExperience = `At Thinkful, I both mentored new students in web development as well as graded a variety of web related assignments. Leaving helpful guidance and advice or praise.`;
  const codigoExperience = `At Codigo I worked to help integrate interactive content into their existing framework for digital signage using mainly javascript. I also created both a knowledge base specifically for the customer support team.`;
  return (
    <ScrollView>
      <Card
       resizeMode="contain"
        title="Connect, LLC."
        description={connectExperience}
        linkURL=""
      ></Card>

      <Card
        image="https://mk0eltorocomd2iu6ndj.kinstacdn.com/wp-content/uploads/2017/09/web_red.png"
        resizeMode="contain"
        title="El Toro"
        description={eltoroExperience}
        linkName="El Toro"
        linkURL="http://eltoro.com"
      ></Card>

      <Card
        image="https://tf-shoebill-prod.imgix.net/img/logo.1879aa6.svg"
        resizeMode="contain"
        title="Thinkful"
        description={thinkfulExperience}
        linkName="Thinkful"
        linkURL="http://thinkful.com"
      ></Card>

      <Card
        image="http://adder.io/assets/images/asset-13x2x-361x129.png"
        resizeMode="contain"
        title="Adder Mobile Technology"
        description={adderMobileExperience}
        linkName="Adder"
        linkURL="http://adder.io"
      ></Card>
      <Card
        image="http://cdn.asihub.com/asi/img/logos/advanced-solutions-inc-logo.png"
        resizeMode="contain"
        title="Advanced Solutions"
        description={advancedSolutionsExperience}
        linkName="Advanced Solutions"
        linkURL="http://www.advancedsolutions.mobi/"
      ></Card>
      <Card
        image="https://parkseed.com/images/art/Park-Logo-2020.png"
        resizeMode="contain"
        title="JPPA Parkseed"
        description={parkseedExperience}
        linkName="JPPA Parkseed"
        linkURL="http://www.parkseed.com"
      ></Card>
      <Card
        image="https://rrb9y3pc0lm4qd0v4tdsxqq9-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/spectrio-logo-violet-cloud-web.svg"
        resizeMode="contain"
        title="Codigo"
        description={codigoExperience}
        linkName="Codigo"
        linkURL="https://www.spectrio.com/acquisitions/codigo/"
      ></Card>
    </ScrollView>
  );
};

export default ExperienceScreen;

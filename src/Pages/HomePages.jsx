import React from "react";
import Banner from "../Component/Banner";
import EventCard from "../Component/EventCard";
import WhyChooseUs from "../Component/WhyChooseUs";
import Testimonials from "../Component/Testimonials";
import TrainingSection from "../Component/TrainingSection";
import MarathonCardList from "../Component/MarathonCardList";
import { Helmet } from "react-helmet";
const HomePages = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <title>HomePage</title>{" "}
      </Helmet>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <MarathonCardList />
        <WhyChooseUs />
        <EventCard />
        <TrainingSection />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePages;

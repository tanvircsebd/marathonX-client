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
      <MarathonCardList></MarathonCardList>
      <WhyChooseUs></WhyChooseUs>
      <EventCard></EventCard>
      <TrainingSection></TrainingSection>
      <Testimonials></Testimonials>
    </div>
  );
};

export default HomePages;

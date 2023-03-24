import React from "react";
import Footer from "../Component/Footer";
import MainHeader from "../Component/MainHeader";
import Navbar from "../Component/Navbar";
import SectionIcanDo from "../Component/SectionIcanDo";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MainHeader />
      <SectionIcanDo />
      <Footer />
    </div>
  );
};

export default Home;

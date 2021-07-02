import React from "react";
import WhoAreWe from "./WhoAreWe";
import OurStory from "./OurStory";
import VideoOurStory from "./VideoOurStory";
import Expertise from "./Expertise";
import Team from "./Team";
import OurWorks from "./OurWorks";
import Reviews from "./Reviews";
import NewsForm from "./NewsForm";

export default function LandingBlocks() {
    return (
        <>
            <WhoAreWe />
            <OurStory />
            <VideoOurStory />
            <Expertise />
            <Team />
            <OurWorks />
            <Reviews />
            <NewsForm />
        </>
    )
}

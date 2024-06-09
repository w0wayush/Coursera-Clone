import { Typography } from "@mui/material";
import React from "react";
import AdvantageCard from "../smallComponents/AdvantageCard";

const AdvantageSection = () => {
  return (
    <div>
      <div style={{ height: "50vh" }}>
        <div>
          <Typography
            variant="h4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            <b>Invest in your career with Coursera Plus</b>
          </Typography>
          <Typography
            variant="h6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            Get access to videos in over 90% of courses, Specializations, and
            Professional Certificates taught by top <br /> instructors from
            leading universities and companies.
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            margin: "80px",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <AdvantageCard
            imageLink="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/00b4aa50ad9e3233e50c4a39e3df94f0.png?auto=format%2Ccompress&dpr=1&h=55"
            p1="Learn anything"
            p2="Explore any interest or trending topic,"
            p3="take prerequisites, and advance your"
            p4="skills"
          />
          <AdvantageCard
            imageLink="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/73feba6a844effd3a1116ba46b805171.png?auto=format%2Ccompress&dpr=1&h=47"
            p1="Save money"
            p2="Spend less money on your learning if"
            p3="you plan to take multiple courses "
            p4="this year"
          />
          <AdvantageCard
            imageLink="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/52653c8817c0031d547d6df9251e52ef.png?auto=format%2Ccompress&dpr=1&h=55"
            p1="Flexible learning"
            p2="Learn at your own pace, move between"
            p3="multiple courses, or switch to a different "
            p4="course"
          />
          <AdvantageCard
            imageLink="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/54e0e0ac5da4f6184bda8d9a69ebf237.png?auto=format%2Ccompress&dpr=1&h=40"
            p1="Unlimited certificates"
            p2="Earn a certificate for every learning"
            p3="program that you complete at no "
            p4="additional cost"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvantageSection;

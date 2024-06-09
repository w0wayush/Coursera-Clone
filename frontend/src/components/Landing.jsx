import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading.js";
import AdvantageSection from "./AdvantageSection.jsx";
import Banner from "../assets/banner.mp4";
import PricingPlanCard from "../smallComponents/PricingPlanCard.jsx";

export const Landing = () => {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);

  return (
    <div>
      <Grid container style={{ padding: "3vw" }}>
        <Grid item xs={12} md={8} lg={12}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
            }}
          >
            {!userEmail ? (
              <Typography variant={"h2"} style={{ fontWeight: 600 }}>
                Coursera Admin
              </Typography>
            ) : (
              <Typography variant={"h2"} style={{ fontWeight: 600 }}>
                Welcome To Coursera
              </Typography>
            )}
            <Typography variant={"h5"} style={{ marginTop: 10 }}>
              A place to learn, earn, and grow
            </Typography>
          </div>
          <div style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}>
            <video
              style={{ width: "100%", borderRadius: 10 }}
              muted
              loop
              autoPlay
            >
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </Grid>
        {/* <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
          
        </Grid> */}
      </Grid>

      <div
        style={{
          margin: "50px 0",
          height: "1px",
          backgroundColor: "lightgrey",
        }}
      ></div>

      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="h4"
      >
        <p>
          Learn from
          <span>
            <b> 325+ </b>
          </span>
          leading universities and companies with Coursera Plus
        </p>
      </Typography>
      <div
        style={{
          display: "flex",
          gap: "25px ",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
          height: "20vh",
        }}
      >
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/1cf37d98b6fd015d85b68f95a84163c4.svg?auto=format%2Ccompress&dpr=1&h=32" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/121b60a5c5b5b012a95626ce12b4265d.png?auto=format%2Ccompress&dpr=1&h=37" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/d266099ac753c0c93d7d291257fee686.png?auto=format%2Ccompress&dpr=1&h=37" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/49f6fc3123e17dd16361d5b70bc258a9.png?auto=format%2Ccompress&dpr=1&h=55" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/80cdb2567bfa0103fbbfb573784d479c.png?auto=format%2Ccompress&dpr=1&h=32" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/6c3c9b24dc786777991cb1c6b5d82933.png?auto=format%2Ccompress&dpr=1&h=32" />
        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/25920b7c8bd5d2b415220fa76b7e9590.png?auto=format%2Ccompress&dpr=1&h=37" />
      </div>

      <div
        style={{
          margin: "50px 0",
          height: "1px",
          backgroundColor: "lightgrey",
        }}
      ></div>

      <AdvantageSection />

      <div
        style={{
          margin: "50px 0",
          height: "1px",
          backgroundColor: "lightgrey",
        }}
      ></div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            gap: "2rem",
            padding: "5vw",
          }}
        >
          <PricingPlanCard
            title="Single learning program"
            price="₹599 /month"
            features={[
              "✅ Access all courses within the learning program",
              "✅ 1 User",
              "✅ Earn a certificate upon completion",
            ]}
            button="Buy it"
          />
          <PricingPlanCard
            title="Coursera Plus Monthly"
            price="₹1099 /month"
            features={[
              "✅ Access 7,000+ courses and Specializations from 170+ leading companies and universities",
              "✅ Earn unlimited certificates",
              "✅ Learn job-relevant skills and tools with 1,000+ applied projects and hands-on labs from industry experts",
              "✅ Choose from more than 15 Professional Certificate programs from industry leaders like Google, Facebook, and more",
            ]}
            button="Start 7-day Free Trial"
            isUserChoice={true}
          />
          <PricingPlanCard
            title="Coursera Plus Annual"
            price="₹10999 /year"
            features={[
              "✅ Everything included in the monthly plan",
              "✅ Save when you pay up front for the year",
              "✅ Enjoy maximum flexibility to achieve work/life balance and learn at your own pace",
            ]}
            button="Try Coursera Plus Annual"
          />
        </div>
      </div>
    </div>
  );
};

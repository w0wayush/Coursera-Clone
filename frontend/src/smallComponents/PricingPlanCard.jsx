import React from "react";

const PricingPlanCard = ({ title, price, features, button, isUserChoice }) => {
  return (
    <div
      className={`pricing-plan-card ${isUserChoice ? "user-choice" : ""}`}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="pricing-plan-content"
        style={{
          flex: 1,
          maxWidth: isUserChoice ? 550 : 400,
          padding: 20,
          backgroundColor: "#f2f2f2",
          borderRadius: 5,
          textAlign: "center",
          position: "relative",
        }}
      >
        {isUserChoice && <div className="most-popular-tag">Most Popular</div>}
        <div style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          {title}
        </div>
        <div style={{ fontSize: 48, fontWeight: "bold", marginBottom: 10 }}>
          {price}
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {features.map((feature, index) => (
            <li key={index} style={{ marginBottom: 20 }}>
              {feature}
            </li>
          ))}
        </ul>
        <button
          style={{
            padding: 10,
            backgroundColor: "#ff6600",
            color: "#fff",
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default PricingPlanCard;

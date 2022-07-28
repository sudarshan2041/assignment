import React, { useState } from "react";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import HomeSection from "./HomeSection";
import NavBar from "./NavBar";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const [counterValue, setCounterValue] = useState(0);

  function handleIncrement() {
    setCounterValue(counterValue + 1);
  }
  function handleDecrement() {
    setCounterValue(counterValue - 1);
  }

  function onTabChange(e) {
    setActiveTab(e.target.id);
  }

  function handleLogout() {
    navigate("/login");
  }

  return (
    <div className="dash-container">
      <aside>
        <div>{`Counter: ${counterValue}`}</div>
        SideTab
      </aside>
      <div className="dash-content">
        <header>
          Header
          <span className="logout-icon" onClick={handleLogout}>
            &#10006;
          </span>
        </header>
        <NavBar activeTab={activeTab} onTabChange={onTabChange} />
        {activeTab === "home" && (
          <HomeSection
            counterValue={counterValue}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        )}
        {activeTab === "about" && <AboutSection />}
        {activeTab === "contact" && <ContactSection />}
      </div>
    </div>
  );
}

export default Dashboard;

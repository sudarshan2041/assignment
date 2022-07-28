import React, { useState } from "react";
import "./style.scss";

function AboutSection() {
  const [activeTab, setActiveTab] = useState("Tab01");

  function onTabChange(e) {
    setActiveTab(e.target.id);
  }
  return (
    <section>
      <div className="sub-header"> About US</div>
      <div className="parent-container">
        <div className="child-container">
          <nav>
            <div
              className={activeTab === "Tab01" && "active"}
              onClick={onTabChange}
              id="Tab01"
            >
              Tab 01
            </div>
            <div
              className={activeTab === "Tab02" && "active"}
              onClick={onTabChange}
              id="Tab02"
            >
              Tab 02
            </div>

            <div
              className={activeTab === "Tab03" && "active"}
              onClick={onTabChange}
              id="Tab03"
            >
              Tab 03
            </div>
          </nav>
          <div className="sub-tab-section">{activeTab} Content</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

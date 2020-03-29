import React, { Component } from "react";

class Prevention extends Component {
  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h4>DO THE FIVE</h4>
          <strong>Help stop coronavirus</strong>
          <ul>
            <li>1. HANDS Wash them often</li>
            <li>2. ELBOW Cough into it</li>
            <li>3. FACE Don't touch it</li>
            <li>4. SPACE Keep safe distance</li>
            <li>5. HOME Stay if you can</li>
          </ul>
          <p className="flow-text">
            There’s currently no vaccine to prevent coronavirus disease
            (COVID-19).
          </p>
          <p>
            You can protect yourself and help prevent spreading the virus to
            others if you:
          </p>
          <div className="flow-text">Do</div>
          <ul className="flow-text">
            <li>
              1. Wash your hands regularly for 20 seconds, with soap and water
              or alcohol-based hand rub
            </li>
            <li>
              {" "}
              2. Cover your nose and mouth with a disposable tissue or flexed
              elbow when you cough or sneeze{" "}
            </li>
            <li>
              3. Avoid close contact (1 meter or 3 feet) with people who are
              unwell
            </li>{" "}
            <li>
              4. Stay home and self-isolate from others in the household if you
              feel unwell
            </li>
          </ul>
          <div className="flow-text">Don't</div>
          <p className="flow-text">
            Touch your eyes, nose, or mouth if your hands are not clean
          </p>
          <br />
        </div>
      </div>
    );
  }
}

export default Prevention;

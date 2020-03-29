import React, { Component } from "react";

class Symptoms extends Component {
  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <div className="row">
            <h4>HOW IT SPREADS</h4>

            <p>
              Coronavirus disease spreads primarily through contact with an
              infected person when they cough or sneeze. It also spreads when a
              person touches a surface or object that has the virus on it, then
              touches their eyes, nose, or mouth.
            </p>

            <p>
              More rarely, the disease can be serious and even fatal. Older
              people, and people with other medical conditions (such as asthma,
              diabetes, or heart disease), may be more vulnerable to becoming
              severely ill.
            </p>

            <h5>People may experience:</h5>
            <ul>
              <li>
                <strong>cough</strong>
              </li>{" "}
              <li>
                <strong>fever</strong>
              </li>{" "}
              <li>
                <strong>tiredness</strong>
              </li>
              <li>
                <strong>difficulty breathing (severe cases)</strong>
              </li>
            </ul>

            <p>
              The COVID-19 virus affects different people in different ways.
              COVID-19 is a respiratory disease and most infected people will
              develop mild to moderate symptoms and recover without requiring
              special treatment. People who have underlying medical conditions
              and those over 60 years old have a higher risk of developing
              severe disease and death.
            </p>
            <br />
            <img
              className="responsive-img"
              src="../images/coronavirus_img1.png"
              alt=""
              title=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Symptoms;

import React, { Component } from "react";

class Faq extends Component {
  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <h5>
            Why does covid19alert.netlify.com have more postive count than MoH?
          </h5>
          <p>
            MoHFW updates the data at a scheduled time and we update them from
            https://www.covid19india.org/.
          </p>
          <h5>Are you official?</h5>
          <p>No</p>
          <h5>
            Who are you? Are you helping people to protect yourself from this
            virus?
          </h5>
          <p>
            I am a volunteer, dedicated citizen of india, care for our conutry
            India, curating the news coming from state bulletins, press releases
            and news houses accroding to https://www.covid19india.org data. We
            extract the details, like patient relationship to other patient (to
            identify local and community transmissions), travel history and
            status. We never collect or expose any personally identifiable data
            regarding the patients.
          </p>
          <h5>
            Why are you putting in time and resources to do this while not
            gaining a single money from it?
          </h5>
          <p>
            By profession, i am a software developer, today it's someone else
            who is getting infeted. Tomorrow it will be us. we need to prevent
            the spread. I need to document the data so that people with
            knowledge are able to use this data to make informed steps.
          </p>
          <h5>How is the data collect for this project?</h5>
          <p>
            I am fetching the api data from https://www.covid19india.org/ which
            is open source, also matching individually from the media resouces,
            where the api data is correct or not.
          </p>
        </div>
      </div>
    );
  }
}

export default Faq;

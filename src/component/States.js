import React, { Component } from "react";
import axios from "axios";

const RAW_DATA_URL = "https://api.covid19india.org/raw_data.json";

class States extends Component {
  state = {
    casesResult: [],
    loader: true
  };

  componentDidMount() {
    axios
      .get(RAW_DATA_URL)
      .then(res => {
        if (res.data != "" && res.status === 200) {
          this.setState({
            ...this.state,
            loader: false,
            casesResult: res.data.raw_data
          });
        }
        //console.log(res.data.raw_data); // print the result
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { casesResult } = this.state;
    return (
      <div className="container" style={{ minHeight: "600px" }}>
        <h3>Covid19 Statewise Cases:</h3>
        {this.state.loader && (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )}

        <ul className="collapsible">
          {casesResult.map((val, index) => {
            if (val.detectedstate !== "") {
              return (
                <li key={`Covid_${index}`}>
                  <div className="collapsible-header">
                    <i className="material-icons red">flag</i>
                    {val.detectedstate} = > {val.detectedcity}
                  </div>
                  <div className="collapsible-body">
                    <b>
                      Nationality: {val.nationality ? val.nationality : "India"}
                    </b>
                    <br />
                    <b>Note: {val.notes ? val.notes : "no data"}</b>
                    <br />
                    <b>
                      Current Status:{" "}
                      {val.currentstatus ? val.currentstatus : "no data"}
                    </b>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default States;

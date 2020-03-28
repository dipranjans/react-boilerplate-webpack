import React, { Component } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";

const COVID19DATA_URL = "https://api.covid19india.org/data.json";

class Home extends Component {
  state = {
    statewise: []
  };

  componentDidMount() {
    axios.get(COVID19DATA_URL).then(res => {
      this.setState({ ...this.state, statewise: res.data.statewise });

      const statepush = [];
      const activepush = [];
      res.data.statewise.map((val, idx) => {
        if (idx > 0 && val.active > 0) {
          statepush.push(val.state);
          activepush.push(val.active);
        }
      });

      this.setState({
        ...this.state,
        labels: statepush,
        datasets: [
          {
            type: "bar",
            label: "Covid19 Cases India",
            data: [...activepush],
            fill: false,
            backgroundColor: "#e85577",
            borderColor: "#71B37C",
            hoverBackgroundColor: "#71B37C",
            hoverBorderColor: "#71B37C"
          }
        ],
        datasetpie: [
          {
            type: "pie",
            label: "Covid19 Cases India",
            data: [...activepush],
            fill: false,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            borderColor: "#71B37C",
            hoverBackgroundColor: "#71B37C",
            hoverBorderColor: "#000"
          }
        ]
      });

      //console.log(this.state);
    });
  }

  render() {
    const { statewise, labels, datasets, datasetpie } = this.state;

    const data = {
      labels,
      datasets
    };
    const data1 = {
      labels,
      datasets: datasetpie
    };

    const statewiseLength = statewise.length;
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <br />
          <br />

          <h4 className="header center red-text">
            Total Confirmed Cases (
            {(() => {
              if (statewise.length > 0) {
                return statewise[0].confirmed;
              }
            })()}
            )
          </h4>
          <h4 className="header center red-text">
            Total Active Cases India (
            {(() => {
              if (statewise.length > 0) {
                return statewise[0].active;
              }
            })()}
            )
          </h4>
          <div className="row center">
            <table className="responsive-table highlight">
              <thead>
                <tr>
                  <th>#</th>
                  <th>State</th>
                  <th>Active Cases</th>
                  <th>Confirmed Cases</th>
                  <th>Deaths</th>
                  <th>Recovered</th>
                  <th>Lastupdatedtime</th>
                </tr>
              </thead>

              <tbody>
                {statewise.map((value, index) => {
                  if (index > 0) {
                    return (
                      <tr key={`Litu${index}`}>
                        <td>{index}</td>
                        <td>{value.state}</td>
                        <td>{value.active}</td>
                        <td>{value.confirmed}</td>
                        <td>{value.deaths}</td>
                        <td>{value.recovered}</td>
                        <td>{value.lastupdatedtime}</td>
                      </tr>
                    );
                  }
                })}

                {statewiseLength === 0 && (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      No Records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <br />
          <br />
        </div>
        <div className="bar__cls">
          {data !== "undefined" && <Bar data={data} />}
          <br />
          <br />
          {data1 !== "undefined" && <Pie data={data1} />}

          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default Home;

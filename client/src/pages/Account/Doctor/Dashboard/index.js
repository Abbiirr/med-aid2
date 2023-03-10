import React, { useState } from "react";
import "./style.scss";
import { Bar } from "react-chartjs-2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Badge from '@mui/material/Badge';

const Index = () => {
  const [year] = useState(new Date().getFullYear());
  const [data] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Patient graph",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "#fec200",
        borderColor: "#fec200",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#fec200",
        pointHoverBorderColor: "#fec200",
        pointHoverBorderWidth: 0,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [10, 30, 20],
      },
    ],
  });
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };
  return (
    <div>
      <div className="dashboard">
        <div className="container-fluid pl-lg-0 py-3 py-lg-0">
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <div className="card border-0">
                <div className="card-body">
                  <Bar
                    data={data}
                    width={800}
                    height={400}
                    options={{
                      maintainAspectRatio: false,
                      title: {
                        display: true,
                        text: "Patient in " + year,
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "bottom",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-6 mb-3 pl-lg-0 pr-0">
                  <div className="card border-0" style={{ height: 150 }}>
                    <div className="card-body">
                      <div className="flex-center flex-column text-center">
                        <h5 className="mb-0">120</h5>
                        <h6 className="mb-0">Appointments</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card border-0" style={{ height: 150 }}>
                    <div className="card-body">
                      <div className="flex-center flex-column text-center">
                        <h5 className="mb-0">120</h5>
                        <h6 className="mb-0">Today Appointments</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3 pl-lg-0 pr-0">
                  <div className="card border-0" style={{ height: 150 }}>
                    <div className="flex-center flex-column text-center">
                      <h5 className="mb-0">120</h5>
                      <h6 className="mb-0">New Request</h6>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="card border-0" style={{ height: 150 }}>
                    <div className="card-body">
                      <div className="flex-center flex-column text-center">
                        <h5 className="mb-0">120</h5>
                        <h6 className="mb-0">Total Patient</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Active PA's
          </Typography>
          <Stack direction="row" spacing={2}>
            <Badge color="primary" variant="dot" invisible={invisible}>
              <Avatar alt="Sabil Azmayen" src="/static/images/avatar/1.jpg" />
            </Badge>
            <Badge color="primary" variant="dot" invisible={invisible}>
              <Avatar alt="Abir Hossain" src="/static/images/avatar/1.jpg" />
            </Badge>
            <Avatar alt="Dipu" src="/static/images/avatar/1.jpg" />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;

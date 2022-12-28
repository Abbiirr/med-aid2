import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../utils/apiURL";
import queryString from "query-string";
import { useLocation } from "react-router";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import NavbarComponent from "../../components/User/Navbar/index";
import SearchComponent from "../../components/User/Search/index";
import DoctorsListComponent from "../../components/User/DoctorsList/index";
import FooterComponent from "../../components/User/Footer/index";

//http://localhost:4000/api/v1/patient/findDoctors?symptoms=sneezing

const Index = () => {
  //use a variable to store the search query
  const [doctors, setDoctors] = useState([]);

  const location = useLocation();
  const value = queryString.parse(location.search);
  const symptoms = value.symptoms;
  //console.log(symptoms)

  useEffect(() => {
    //search doctors
    console.log(symptoms);
    const searchDoctors = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/doctor/getDoctors"
        );
        setDoctors(response.data);
      } catch (error) {
        if (error) console.log("error");
      }
    };
    searchDoctors();
  }, []);

  let sortBy;
  const handleChange = () => {
    //load page
  };

  return (
    <div>
      <NavbarComponent />
      <div className="search-result-index">
        <div className="container">
          <FormControl sx={{ marginTop: 5, width: 200, zIndex: 0 }}>
            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="sort by"
              onChange={handleChange}
            >
              <MenuItem value={"default"}>Default</MenuItem>
              <MenuItem value={"location"}>Location</MenuItem>
              <MenuItem value={"Experience"}>Experience</MenuItem>
            </Select>
          </FormControl>
          <div style={{ display: "flex", float: "right" }}>
            <Button style={{ marginLeft: "auto" }}>
              Pending Doctor Approvals
            </Button>
          </div>
          <div className="row">
            <div className="col-12 py-4"></div>
            <div className="col-12 py-4 py-lg-5 text-center">
              <h3 className="font-weight-bold mb-0">
                Found {doctors ? doctors.length : null} doctors.
              </h3>
            </div>
          </div>
        </div>

        {/* Results */}
        <DoctorsListComponent doctors={doctors} loading={false} />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Index;

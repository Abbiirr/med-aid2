import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiURL } from "../../utils/apiURL";
import queryString from "query-string";
import { useLocation } from "react-router";
import Select from 'react-select'

import "./style.scss";

import NavbarComponent from "../../components/User/Navbar/index";
//import SearchComponent from "../../components/User/SearchForMedicine/index";
import DiagnosticCenterListComponent from "../../components/diagnosticCenterList/diagnosticComponent";
import FooterComponent from "../../components/User/Footer/index";

const Index = () => {
  //use a variable to store the search query
  const [centers, setCenters] = useState([]);
  const [tests, setTests] = useState([]);
  const [allCenters, setAllCenters] = useState([]);
  const [q, setQ] = useState("");
  const [searchInput, setSearchInput] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTest, setSearchTest] = useState("");
  const [searched, setSearched] = useState(false);
    

  const location = useLocation();
  //const value = queryString.parse(location.search);

  useEffect(() => {
    const searchCenters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/diagnosticCenter`
        );
        setCenters(response.data);
        setAllCenters(response.data);
      } catch (error) {
        if (error) console.log("error");
      }
    };
    searchCenters();
  }, []);

  //console.log(q);

 const submitSearch = async (e) =>{
    e.preventDefault();
    console.log("diagnostic serach: ", searchInput)

    let s = "";
    for (let i = 0; i < searchInput.length; i++) {
      s = s + searchInput[i].value.toString() + ",";
    }
    s = s.slice(0, -1);
    console.log("diagnostic serach in string: ", s);

    //dispatch(fetchSearch(searchInput));
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/diagnosticCenter/findCenter?testName=${s}`
      );
      //console.log("Test based center : ", response.data);

      //---sorting based on searched test price
      let temp =response.data
      // temp.sort((a, b) => {
      //   let testA = a.tests.find((test) => test.test_name === searchInput);
      //   let testB = b.tests.find((test) => test.test_name === searchInput);
      //   return testA.test_cost - testB.test_cost;
      // });
      //---end of sorting based on searched test price
      setCenters(temp);
      setSearchTest(searchInput);
      setSearched(true);
      //console.log("test-price based center : ", temp)
      //setCenters(response.data);
      setMessage("Search results for " + searchInput);
    } catch (error) {
      if (error) console.log("error");
    }
    //console.log(searchInput)
    setSearchInput([]);
  }

  //let centerOptions = []
  let centerOptions2 = []

  allCenters.forEach( function (item){
    item.tests.forEach( function (test){
      centerOptions2.push({
        label: test.test_name,
        value: test.test_name,
      });
    })
  })
  //create a set to remove duplicate values from array of 2 properties
  const centerOptionsSet = new Set(centerOptions2.map(JSON.stringify));
  const centerOptions3 = Array.from(centerOptionsSet).map(JSON.parse);


  console.log("options : ",centerOptions2)



  return (
    <div>
      <NavbarComponent />
      <section className="garamond">
          <div className="navy georgia ma0 grow">
              <h2 className="f2">Search your tests</h2>
          </div>
          <div className="pa2">
              <Select
                  onChange={(item) => setSearchInput(item)}
                  maxMenuHeight={175}
                  classNamePrefix="custom-select"
                  options={centerOptions3}
                  //options={symptoms}
                  isMulti
                  //isClearable={true}
                  isSearchable={true}
                  placeholder="Search Your tests"
                  // have to make this field required to make the search work
              />
              <button onClick={submitSearch} type="submit" className="btn">Search</button>
          </div>

      </section> 
      <div className="search-result-index">
        <div className="container">
          <div className="row">
            <div className="col-12 py-4"></div>
            <div className="col-12 py-4 py-lg-5 text-center">
              <h3 className="font-weight-bold mb-0">
                Found {centers ? centers.length : null} centers.
              </h3>
              <h5>
                {message ? message : null}
              </h5>
            </div>
          </div>
        </div>

        {/* Results */}
        <DiagnosticCenterListComponent centers={centers} loading={false} searched={searched}/>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Index;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // For programmatic navigation

  // Sample lectures and weeks (replace with your actual data)
  const lecturesAndWeeks = [
    { name: "Week 1", path: "/week1" },
    { name: "Week 2", path: "/week2" },
    { name: "Week 3", path: "/week3" },
    { name: "Week 4", path: "/week4" },
    { name: "Week 5", path: "/week5" },
    { name: "Lec 1: Introduction to HCI", path: "/lec1" },
    { name: "Lec 2: Models of Human Information Processing", path: "/lec2" },
    { name: "Lec 3: Visual Perception in HCI", path: "/lec3" },
    { name: "Lec 4: Display Devices", path: "/lec4" },
    { name: "Lec 5: Design Guidelines", path: "/lec5" },
    { name: "Lec 6: User Interface Styles", path: "/lec6" },
    { name: "Lec 7: Good User Interface", path: "/lec7" },
    { name: "Lec 8: Guidelines of Good UI", path: "/lec8" },
    { name: "Lec 9: Point and Click Interface", path: "/lec9" },
    { name: "Lec 10: WIMP Interface", path: "/lec10" }
  ];

  // Filter the lectures and weeks based on the search term
  const filteredResults = lecturesAndWeeks.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle the form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    const result = filteredResults[0]; // Use the first result (you can improve this logic)
    if (result) {
      navigate(result.path); // Navigate to the selected result's path
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
       HCI Course
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flex justify-content-center text-center"
          id="navbarScroll"
        >
          <ul
            className="navbar-nav my-2 my-lg-0 navbar-nav-scroll"
            style={{ "--bs-scroll-height": "100px" }}
          >
            <li className="nav-item">
              <Link className="nav-link active p-3" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown p-2">
              <Link
                className="nav-link active dropdown-toggle"
                to="/weekly-task"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Weekly Task
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/week1">
                    Week 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/week2">
                    Week 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/week3">
                    Week 3
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/week4">
                    Week 4
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/week5">
                    Week 5
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Search Input */}
        <form className="d-flex" role="search" onSubmit={handleSearchSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            list="lecturesAndWeeks" // Bind to datalist
          />
          <button className="btn btn-outline-success text-primary" type="submit">
            Search
          </button>

          {/* Datalist for suggestions */}
          <datalist id="lecturesAndWeeks">
            {filteredResults.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom'; 

function Week3() {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg animate__animated animate__fadeInUp">
        <div className="card-body">
          {/* Title Section */}
          <h1 className="card-title text-center text-primary">Course Content for Week 3</h1>
          <p className="text-center lead mb-4">
            This week, we focus on two essential lectures about design guidelines and user interface styles.
          </p>

          {/* Lecture 5 Section */}
          <div className="lecture">
            <h2 className="text-success">Lec 5: <br />Design Guidelines</h2>
            <p className="lead">
              In this lecture, we will explore the fundamental design guidelines that shape the user interface (UI) and user experience (UX). These guidelines ensure that designs are intuitive, user-friendly, and accessible, making the interaction seamless and efficient.
            </p>
            <Link to="/lec5" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec5 */}
          </div>

          {/* Lecture 6 Section */}
          <div className="lecture mt-4">
            <h2 className="text-success">Lec 6: <br />User Interface Styles</h2>
            <p className="lead">
              This lecture will delve into various user interface styles, such as graphical, command-line, and voice interfaces. Understanding these styles helps us design UIs that match user needs and preferences while ensuring optimal usability.
            </p>
            <Link to="/lec6" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec6 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week3;

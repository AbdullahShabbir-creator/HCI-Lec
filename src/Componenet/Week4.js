import React from 'react';
import { Link } from 'react-router-dom'; // For routing

function Week4() {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg animate__animated animate__fadeInUp">
        <div className="card-body">
          {/* Title Section */}
          <h1 className="card-title text-center text-primary">Course Content for Week 4</h1>
          <p className="text-center lead mb-4">
            In Week 4, we cover two critical topics that focus on building and understanding good user interfaces.
          </p>

          {/* Lecture 7 Section */}
          <div className="lecture">
            <h2 className="text-success">Lec 7: <br /> Good User Interface</h2>
            <p className="lead">
              In this lecture, we will discuss the characteristics that make a user interface "good." These include usability, accessibility, and how design can improve the user's experience and efficiency.
            </p>
            <Link to="/lec7" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec7 */}
          </div>

          {/* Lecture 8 Section */}
          <div className="lecture mt-4">
            <h2 className="text-success">Lec 8: <br /> Guidelines of Good User Interface</h2>
            <p className="lead">
              This lecture covers the guidelines that should be followed in UI design, including clarity, consistency, feedback, and usability testing. These principles are essential in creating a user-friendly and effective interface.
            </p>
            <Link to="/lec8" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec8 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week4;

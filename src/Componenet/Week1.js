import React from 'react';
import './Week1.css'; // Import CSS for animations and styling
import { Link } from 'react-router-dom'; // For routing

function Week1() {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg animate__animated animate__fadeInUp">
        <div className="card-body">
          {/* Title Section */}
          <h1 className="card-title text-center text-primary">Course Content for Week 1</h1>
          <p className="text-center lead mb-4">
            This week, two important lectures are covered that lay the foundation for understanding Human-Computer Interaction (HCI).
          </p>

          {/* Lecture 1 Section */}
          <div className="lecture">
            <h2 className="text-success">Lec 1: <br /> Introduction to HCI</h2>
            <p className="lead">
              In this lecture, we dive deep into the fundamentals of Human-Computer Interaction (HCI), covering topics like user-centered design, the importance of usability, and HCI's role in technology development.
            </p>
            <Link to="/lec1" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec1 */}
          </div>

          {/* Lecture 2 Section */}
          <div className="lecture mt-4">
            <h2 className="text-success">Lec 2: <br />Human Processing Models</h2>
            <p className="lead">
              This lecture explores various models of human cognitive processing, focusing on how information is received, processed, and stored in the human mind. Understanding these models helps in designing intuitive systems and interfaces.
            </p>
            <Link to="/lec2" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec2 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week1;

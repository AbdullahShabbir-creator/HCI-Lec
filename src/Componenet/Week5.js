import React from 'react';
import { Link } from 'react-router-dom'; // For routing

function Week5() {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg animate__animated animate__fadeInUp">
        <div className="card-body">
          {/* Title Section */}
          <h1 className="card-title text-center text-primary">Course Content for Week 5</h1>
          <p className="text-center lead mb-4">
            In Week 5, we cover two important topics focusing on user interfaces: Point and Click Interface and WIMP Interface.
          </p>

          {/* Lecture 9 Section */}
          <div className="lecture">
            <h2 className="text-success">Lec 9: <br /> Point and Click Interface</h2>
            <p className="lead">
              In this lecture, we will cover the fundamentals of the Point and Click interface, a widely used interaction method in modern computing. The concept is based on direct manipulation, making interaction with digital systems more intuitive.
            </p>
            <Link to="/lec9" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec9 */}
          </div>

          {/* Lecture 10 Section */}
          <div className="lecture mt-4">
            <h2 className="text-success">Lec 10: <br /> WIMP Interface</h2>
            <p className="lead">
              This lecture delves into the WIMP (Windows, Icons, Menus, and Pointers) interface, one of the most popular interface paradigms that defines user interaction in graphical user interfaces.
            </p>
            <Link to="/lec10" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec10 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week5;

import React from 'react';
 // Import CSS for animations and styling
import { Link } from 'react-router-dom'; // For routing

function Week2() {
  return (
    <div className="container mt-4">
      <div className="card shadow-lg animate__animated animate__fadeInUp">
        <div className="card-body">
          {/* Title Section */}
          <h1 className="card-title text-center text-primary">Course Content for Week 2</h1>
          <p className="text-center lead mb-4">
            This week, two important lectures are covered that explore Visual Perception and Display Devices in Human-Computer Interaction (HCI).
          </p>

          {/* Lecture 3 Section - Visual Perception in HCI */}
          <div className="lecture">
            <h2 className="text-success">Lec 3: <br /> Visual Perception in HCI</h2>
            <p className="lead">
              This lecture focuses on how humans perceive visual information, an essential component in designing effective interfaces. Topics include color theory, contrast, and how visual stimuli are interpreted by the brain, which significantly impacts usability.
            </p>
            <Link to="/lec3" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec3 */}
          </div>

          {/* Lecture 4 Section - Display Devices */}
          <div className="lecture mt-4">
            <h2 className="text-success">Lec 4: <br /> Display Devices</h2>
            <p className="lead">
              In this lecture, we dive into various display technologies used in HCI, such as CRTs, LCDs, OLEDs, and newer innovations like flexible displays. Understanding these devices is crucial for designing user interfaces that are visually effective and accessible.
            </p>
            <Link to="/lec4" className="btn btn-outline-primary">See Full Lecture</Link> {/* Route to Lec4 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week2;

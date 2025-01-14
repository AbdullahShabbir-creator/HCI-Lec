import React from 'react';
import { Link } from 'react-router-dom';

function Lec2() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side: Video */}
        <div className="col-md-6">
          <h2 className="text-secondary">Lecture 2: <br/> Human Processing Models</h2>
          <div className="video-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/mnXLKFGCsLs?si=zw1NEtlBv0kVJiHR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="lead mt-3">
            If you wish to study the topic in more depth, you can explore additional resources and discussions.
          </p>
        </div>

        {/* Right Side: Lecture Details */}
        <div className="col-md-6">
          <h3 className="text-primary">Topic Overview:</h3>
          <p className="lead">
            This lecture explores various models of human cognitive processing, focusing on how information is received, processed, and stored in the human mind. Understanding these models helps in designing intuitive systems and interfaces that align with how humans process information.
          </p>
          <h4 className="text-secondary">Topics Covered in This Lecture:</h4>
          <ul>
            <li>Introduction to Human Information Processing</li>
            <li>Various Models of Cognitive Processing</li>
            <li>Memory Systems and Their Role in Design</li>
            <li>Implications for Interface Design</li>
          </ul>

         
        </div>
        <div>
            <h4 className='text-primary mb-5'>Full Overview Of Lec 2</h4>
            <p className="lead">
                            In this lecture, we dive into the models that explain how humans process information, which is fundamental in designing effective and intuitive human-computer interfaces. Human information processing models describe the cognitive mechanisms used by humans to receive, process, store, and retrieve information. These models guide the design of systems and technology that align with human cognitive abilities, improving user experiences.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Cognitive Models</strong>: These explain the steps involved in human thinking, memory, decision-making, and perception.</li>
                                <li><strong>Sensory and Short-Term Memory</strong>: How information is initially processed and stored for immediate use.</li>
                                <li><strong>Long-Term Memory</strong>: How information is encoded, stored, and retrieved for future use.</li>
                                <li><strong>Attention and Perception</strong>: How we focus on relevant information and interpret sensory inputs.</li>
                                <li><strong>Design Implications</strong>: Insights from these models help interface designers create systems that are easier to use, taking cognitive limitations into account.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By understanding these models, designers can create user interfaces that are not only more efficient but also align with how humans naturally think and process information. The goal is to reduce cognitive load and improve usability.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> If you'd like to explore this topic further, additional readings, case studies, and research discussions can provide deeper insights into how these models are applied in real-world interface design and the development of intuitive systems.
                        </p>
                        <Link to="/week1" className="btn btn-outline-primary mt-3">See Weekly Lecture</Link></div>
      </div>
    </div>
  );
}

export default Lec2;

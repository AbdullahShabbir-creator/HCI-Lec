import React from 'react';
import { Link } from 'react-router-dom';

function Lec9() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 9: Point and Click Interface</h1>

                    <div className="row">
                
                        <div className="col-md-6">
                            <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/lixqP7zDHnw?si=CWRHPioDBilPK7y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Point and Click Interface</h3>
                                <ul>
                                    <li><strong>1-</strong> Introduction to Point and Click Interface</li>
                                    <li><strong>2-</strong> Benefits of Direct Manipulation</li>
                                    <li><strong>3-</strong> Common Applications of Point and Click Interfaces</li>
                                    <li><strong>4-</strong> Mouse as a Primary Input Device</li>
                                    <li><strong>5-</strong> Evolution of Point and Click Systems</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we explore the Point and Click interface, which is a crucial aspect of modern graphical user interfaces. This interface relies on the use of a pointing device, such as a mouse, to interact with elements on the screen.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Direct Manipulation</strong>: Interacting with digital objects directly using pointing devices.</li>
                                <li><strong>Mouse Input</strong>: How the mouse facilitates interaction by allowing users to select and manipulate elements.</li>
                                <li><strong>Intuitive Design</strong>: The design of graphical user interfaces that simplifies interaction by mimicking physical actions.</li>
                                <li><strong>Usability</strong>: How point-and-click systems improve ease of use and accessibility.</li>
                                <li><strong>Applications</strong>: Examples of industries and tools using point-and-click interfaces, including operating systems and design software.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            By understanding the fundamentals of point-and-click interaction, designers can create more intuitive and user-friendly interfaces.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> Readings and case studies provide additional insight into how point-and-click systems have revolutionized user interfaces in the digital world.
                        </p>
                        <Link to="/lec10" className="btn btn-outline-primary">See Lecture 10</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec9;

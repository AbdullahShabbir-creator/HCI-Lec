import React from 'react';
import { Link } from 'react-router-dom';

function Lec4() {
    return (
        <div className="container mt-5">
            <div className="card shadow-lg animate__animated animate__fadeInUp">
                <div className="card-body">
                    <h1 className="card-title text-center text-primary">Lec 4: Display Devices in HCI</h1>

                    <div className="row">
                        {/* Video Section - Left Side */}
                        <div className="col-md-6">
                            <div className="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vq3LQifjvh0?si=BzVigYG51P2VXsox" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="topics">
                                <h3 className="text-primary">Topics Covered in Display Devices in HCI</h3>
                                <ul>
                                    <li><strong>1-</strong>Overview of Display Devices</li>
                                    <li><strong>2-</strong>Types of Display Devices (CRT, LCD, OLED, etc.)</li>
                                    <li><strong>3-</strong>Resolution and Pixel Density</li>
                                    <li><strong>4-</strong>Color Representation and Gamut</li>
                                    <li><strong>5-</strong>Ergonomics and Usability of Displays</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lecture-details mt-4">
                        <h3 className="text-secondary">Lecture Summary</h3>
                        <p className="lead">
                            In this lecture, we examine the role of display devices in Human-Computer Interaction (HCI). Display devices serve as the primary medium through which users interact with digital systems, and understanding their types, capabilities, and limitations is critical for designing user interfaces that are visually appealing and efficient.
                        </p>
                        <p className="lead">
                            <strong>Key Concepts:</strong>
                            <ul>
                                <li><strong>Display Device Types:</strong> Different types of displays such as CRT (Cathode Ray Tube), LCD (Liquid Crystal Display), OLED (Organic Light Emitting Diode), and their characteristics.</li>
                                <li><strong>Resolution:</strong> The number of pixels displayed on the screen and its effect on clarity and detail.</li>
                                <li><strong>Pixel Density:</strong> The number of pixels per unit of display area, impacting the sharpness and crispness of the image.</li>
                                <li><strong>Color Representation:</strong> How colors are represented on screens and the importance of color accuracy for design and usability.</li>
                                <li><strong>Ergonomics:</strong> How to optimize the user experience by considering factors like screen size, viewing angle, brightness, and user comfort.</li>
                            </ul>
                        </p>
                        <p className="lead">
                            Display technology has a direct impact on user experience in digital interfaces. High-quality displays with accurate color reproduction and appropriate resolution enhance the clarity of information and reduce visual strain. Understanding these concepts enables designers to make informed decisions about the visual presentation of user interfaces.
                        </p>
                        <p className="lead">
                            <strong>Explore More:</strong> To gain a deeper understanding of display devices, additional readings and case studies can be explored, discussing the evolution of display technologies and their role in modern HCI design.
                        </p>
                        <Link to="/week2" className="btn btn-outline-primary">See Weekly Lecture </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lec4;

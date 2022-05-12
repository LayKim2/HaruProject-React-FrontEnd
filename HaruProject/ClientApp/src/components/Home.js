import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <React.Fragment>
                <div className="hero_area">
                    <div className="hero_social">
                        <a href="">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    <header className="header_section">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg custom_nav-container ">
                                <a className="navbar-brand" href="index.html">
                                    <span>
                                        HARU（春）
                                    </span>
                                </a>

                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className=""> </span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="watches.html"> Watches </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="about.html"> About </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                    <div className="user_option-box">
                                        <a href="">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                    <section className="slider_section ">
                        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="detail-box">
                                                    <h1>
                                                        Smart Watches
                                                    </h1>
                                                    <p>
                                                        Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="img-box">
                                                    <img src="assets/images/slider-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="detail-box">
                                                    <h1>
                                                        Smart Watches
                                                    </h1>
                                                    <p>
                                                        Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="img-box">
                                                    <img src="assets/images/slider-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="detail-box">
                                                    <h1>
                                                        Smart Watches
                                                    </h1>
                                                    <p>
                                                        Aenean scelerisque felis ut orci condimentum laoreet. Integer nisi nisl, convallis et augue sit amet, lobortis semper quam.
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="img-box">
                                                    <img src="assets/images/slider-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ol className="carousel-indicators">
                                <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                                <li data-target="#customCarousel1" data-slide-to="1"></li>
                                <li data-target="#customCarousel1" data-slide-to="2"></li>
                            </ol>
                        </div>

                    </section>
                </div>

                <section className="shop_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Latest Watches
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w1.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $300
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                Featured
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w2.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $125
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w3.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $110
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w4.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $145
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w5.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $195
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6  col-xl-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w6.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $170
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3">
                                <div className="box">
                                    <a href="">
                                        <div className="img-box">
                                            <img src="assets/images/w1.png" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <h6>
                                                Smartwatch
                                            </h6>
                                            <h6>
                                                Price:
                                                <span>
                                                    $230
                                                </span>
                                            </h6>
                                        </div>
                                        <div className="new">
                                            <span>
                                                New
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <a href="">
                                View All
                            </a>
                        </div>
                    </div>
                </section>

                <section className="about_section layout_padding">
                    <div className="container  ">
                        <div className="row">
                            <div className="col-md-6 col-lg-5 ">
                                <div className="img-box">
                                    <img src="assets/images/about-img.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7">
                                <div className="detail-box">
                                    <div className="heading_container">
                                        <h2>
                                            About Us
                                        </h2>
                                    </div>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                                        in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                                        are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                                        the middle of text. All
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="feature_section layout_padding">
                    <div className="container">
                        <div className="heading_container">
                            <h2>
                                Features Of Our Watches
                            </h2>
                            <p>
                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assets/images/f1.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Fitness Tracking
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                        <a href="">
                                            <span>
                                                Read More
                                            </span>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assets/images/f2.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Alerts & Notifications
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                        <a href="">
                                            <span>
                                                Read More
                                            </span>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assets/images/f3.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Messages
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                        <a href="">
                                            <span>
                                                Read More
                                            </span>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="box">
                                    <div className="img-box">
                                        <img src="assets/images/f4.png" alt="" />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            Bluetooth
                                        </h5>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        </p>
                                        <a href="">
                                            <span>
                                                Read More
                                            </span>
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <a href="">
                                View More
                            </a>
                        </div>
                    </div>
                </section>

                <section className="contact_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form_container">
                                    <div className="heading_container">
                                        <h2>
                                            Contact Us
                                        </h2>
                                    </div>
                                    <form action="">
                                        <div>
                                            <input type="text" placeholder="Full Name " />
                                        </div>
                                        <div>
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Phone number" />
                                        </div>
                                        <div>
                                            <input type="text" className="message-box" placeholder="Message" />
                                        </div>
                                        <div className="d-flex ">
                                            <button>
                                                SEND
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src="assets/images/contact-img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="client_section layout_padding">
                    <div className="container">
                        <div className="heading_container heading_center">
                            <h2>
                                Testimonial
                            </h2>
                        </div>
                        <div className="carousel-wrap ">
                            <div className="owl-carousel client_owl-carousel">
                                <div className="item">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="assets/images/c1.jpg" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        Mark Thomas
                                                    </h5>
                                                    <h6>
                                                        Customer
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore
                                                et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum
                                                dolore eu fugia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="box">
                                        <div className="img-box">
                                            <img src="assets/images/c2.jpg" alt="" />
                                        </div>
                                        <div className="detail-box">
                                            <div className="client_info">
                                                <div className="client_name">
                                                    <h5>
                                                        Alina Hans
                                                    </h5>
                                                    <h6>
                                                        Customer
                                                    </h6>
                                                </div>
                                                <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore
                                                et
                                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                cillum
                                                dolore eu fugia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="footer_detail">
                                    <h4>About</h4>
                                    <p>
                                        Necessary, making this the first true generator on the Internet.
                                        It uses a dictionary of over 200 Latin words, combined with
                                    </p>
                                    <div className="footer_social">
                                        <a href="">
                                            <i className="fa fa-facebook" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-twitter" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="footer_contact">
                                    <h4>Reach at..</h4>
                                    <div className="contact_link_box">
                                        <a href="">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <span> Location </span>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <span> Call +01 1234567890 </span>
                                        </a>
                                        <a href="">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span> demo@gmail.com </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="footer_contact">
                                    <h4>Subscribe</h4>
                                    <form action="#">
                                        <input type="text" placeholder="Enter email" />
                                        <button type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 footer-col">
                                <div className="map_container">
                                    <div className="map">
                                        <div id="googleMap"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-info">
                            <p>
                                &copy; <span id="displayYear"></span> All Rights Reserved By
                                <a href="https://html.design/">Free Html Templates</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

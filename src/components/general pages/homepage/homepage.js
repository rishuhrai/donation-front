import React from 'react';
import Cause from '../shared/cause';
import { ReactComponent as MySvg } from './mySvg.svg';

// import {Link} from 'react-router-dom';
// import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

const Homepage = () =>{

    return ( 
        <div>
            {/* <!-- ========== HEADER ========== --> */}
            <header className="head" data-parallax="scroll" data-image-src="" data-speed="0.4">
                <div className="container">
                    <div className="outer">
                        <div className="inner text-center">
                             <MySvg /> 
                             <div style={{ margin: '20px' }}></div>
                            <div className='jel' >
                            <div className="animate-title" >
                                <ul className="texts" >
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'1000em'}}>Alone, we walk...</li>
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'10px'}}>Together, we go places!</li>
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'10px'}}>You can make difference!</li>
                                    <li data-in-effect="fadeInUp" data-out-effect="fadeOutDown" style={{fontSize:'10px'}}>Yes we can!</li>
                                </ul> {/* end texts */}                            
                            </div>{/* end animate-title */}
                            <h4 style={{color:'#fff'}}>Welcome to caritas: Charity donation platform where you can donate and help make a difference</h4>
                            {/*<button type="button" className="btn gw-btn" style={{padding:'10px', fontSize:'20px'}}>How it works</button>*/}
                            </div></div> {/* end inner */}
                    </div> {/* end outer */}
                </div> {/* end container */}
            </header>

            {/* <!-- ========== COUNTERS SECTION ========== --> */}
            <section className="content-section counters-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-title">
                            <h3>Together, we can make difference.</h3>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-box">
                            <span className="count-icon ion-happy-outline"></span>
                            <div className="count-info">
                                <h3><span className="counter">100</span>+</h3>
                                <p>Organizations</p>
                            </div> {/* end count-info */}
                        </div> {/* end counter-box */}

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-box">
                            <span className="count-icon ion-ios-flag-outline"></span>
                            <div className="count-info">
                                <h3><span className="counter">10000</span>+</h3>
                                <p>Beneficiaries</p>
                            </div> {/* end count-info */}
                        </div> {/* end counter-box */}

                        <div className="col-md-3 col-sm-6 col-xs-6 counter-box">
                            <span className="count-icon ion-ios-flame-outline"></span>
                            <div className="count-info">
                                <h3><span className="counter">300</span>+</h3>
                                <p>Donors</p>
                            </div> {/* end count-info */}
                        </div> {/* end counter-box */}

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== CURRENT CAMPAIGNS SECTION ========== --> */}
            <section className="content-section current-campaigns">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">Current Causes</h3>
                            <h4 className="section-intro">Here are our top picks for the day...</h4>
                        </header>
                    </div> {/* end row */}

                {/* Cause cards */}
                    <div className="col-md-4 col-sm-6">
                        <Cause
                            picture = 'https://placehold.it/1080x718?text=cause-img-1'
                            alt = 'Health picture'
                            caption = 'HealthHope'
                            category = 'Health'
                            description = 'Providing healthcare services and support to underserved communities.Our mission is to ensure that everyone has access to quality healthcare, regardless of their socio-economic background. '
                            progressBar = '70%'
                            amountContributed = '$10,500.00'
                            amountRequired = '$15,000.00'
                            causeId = '/cause_details'
                            donateCauseId = '/donate'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Cause
                            picture = 'https://placehold.it/1080x718?text=cause-img-2'
                            alt = 'uma right picture'
                            caption = 'JusticeNow'
                            category = 'Human Right'
                            description = 'Consectetur How it worksadipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            progressBar = '20%'                       
                            amountContributed = '$1,500.00'
                            amountRequired = '$15,000.00'
                            causeId = '/cause_details'
                            donateCauseId = '/donate'
                        />
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <Cause
                            picture = 'https://placehold.it/1080x718?text=cause-img-3'
                            alt = 'Infrastructural development picture'
                            caption = 'Ipas'
                            category = 'Infrastructural Development'
                            description = 'Dedicated to improving lives by building sustainable infrastructure in underdeveloped communities. We work on projects ranging from building roads and bridges to providing access to clean water and electricity.'
                            progressBar = '55%'
                            amountContributed = '$8,500.00'
                            amountRequired = '$15,000.00'
                            causeId = '/cause_details'
                            donateCauseId = '/donate'
                        /> 
                    </div>
                {/* end cause cards */}
                
                    <a href = '/causes'><button type="button" className="btn gw-btn" style={{padding: '10px'}}>See all causes</button></a>

                </div> {/* end container */}
            </section>

            {/* <!-- ========== ABOUT TRUST ========== --> */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">About the trust</h3>
                            <p className="section-intro">Provides transparent transactions and donations for charitable causes.</p>
                        </header>
                    </div> {/* end row */}

                    <div className="row">
                        <div className="col-md-8">
                            <h5 className="underline">The best charity / fundraising site.</h5>
                            <p>Introducing a website that makes donating to charity easy and transparent. With a user-friendly interface, you can make secure transactions and see exactly where your money is going. This charitable institution is committed to transparency and making a positive impact on the world.</p>
                            <div className="col-md-5">
                                <blockquote>
                                Give with clarity, impact with transparency
                                </blockquote>
                            </div>
                            <p>Rest assured, our website only features verified charitable organizations, so you can trust that your donation is going to a worthy cause. We understand the importance of privacy, which is why we offer completely anonymous transactions. Your personal information is kept confidential, so you can donate with peace of mind. Join us in making the world a better place, one donation at a time.</p>
                            <p>Our mission is to create a positive impact on society by connecting generous donors with deserving charities. Through our website, you can make a meaningful contribution to a cause you care about and help make a difference in the world.</p>
                        </div>

                        <div className="col-md-4">
                            <h5 className="underline">Why Us?</h5>
                            <ul className="ul-style-1">
                                <li><i className="fa fa-star list-icon"></i>Team of more than 200 volunteers.</li>
                                <li><i className="fa fa-send list-icon"></i>Accredited by the government. </li>
                                <li><i className="fa fa-hand-o-right list-icon"></i>Spreading smiles since 20 years. </li>
                                <li><i className="fa fa-thumbs-up list-icon"></i>More than 20 successful campaigns. </li>
                                <li><i className="fa fa-gear list-icon"></i>Most awarded charity trust. </li>
                            </ul>
                            <a href="nothing" className="btn gw-btn">Contact Us</a>
                        </div>
                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== RECENT STORIES ========== --> */}
            <section className="content-section">
                <div className="container">
                    <div className="row">
                        <header className="section-header text-center col-md-8 col-md-offset-2">
                            <h3 className="underline">Recent Stories</h3>
                            <p className="section-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </header>
                    </div> {/* end row */}

                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-4" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Cloths donation camp</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-5" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Healthy Lunch Program</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-6" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Education Program</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-7" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Girls Education Program</a></h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div>

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>

            {/* <!-- ========== STAY CONNECTED SECTION ========== --> */}
            <section className="content-section black-gradient">
                <div className="container">
                    <div className="row">

                        <div className="col-md-6 col-md-offset-3 text-center subscribe-box">
                            <h3 className="mtn">Stay updated with our events & programs.</h3>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter email id..."/>
                                <span className="input-group-btn">
                                    <button className="btn gw-btn" type="button">Subscribe!</button>
                                </span>
                            </div> {/* end input-group */}
                        </div> {/* end subscribe-box */}

                    </div> {/* end row */}
                </div> {/* end container */}
            </section>
        </div>
    )
}
export default Homepage
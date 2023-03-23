import React from 'react';
import Cause from './shared/cause';

const AllCauses = () => {
    return(
        <div>
            {/* <!-- ========== PAGE TITLE ========== --> */}
            <header className="page-title" data-parallax="scroll" data-image-src="http://placehold.it/1080x718?text=kids-img-4" data-speed="0.4" style={{height:'35%'}}>
                <div className="container">
                    <div className="outer" style={{margin:'70px 0px'}}>
                        <div class="inner text-center">
                            <h2>Causes</h2>
                            <h4 class="mt1">Let's build our dream society together.</h4>
                        </div> {/* end inner */}
                    </div> {/* end outer */}
                </div> {/* end container */}
            </header>

            {/* <!-- ========== CURRENT CAMPAIGNS SECTION ========== --> */}
            <section class="content-section current-campaigns">
                <div class="container">
                    <div class="row">
                        <header class="section-header text-center col-md-8 col-md-offset-2">
                            {/* <h3 class="underline">All Causes</h3> */}
                            <p class="section-intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </header>
                    </div> {/* end row */}

                    <div class="row">
                        <div class="col-md-9 shop-products">

                            <div class="col-md-4 col-sm-6">
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

                            <div class="col-md-4 col-sm-6">
                                <Cause
                                    picture = 'https://placehold.it/1080x718?text=cause-img-1'
                                    alt = 'Health picture'
                                    caption = 'HealthHope'
                                    category = 'Health'
                                    description = 'Providing healthcare services and support to underserved communities.Our mission is to ensure that everyone has access to quality healthcare, regardless of their socio-economic background. '
                                    progressBar = '5%'
                                    amountContributed = '$500.00'
                                    amountRequired = '$15,000.00'
                                    causeId = '/cause_details'
                                    donateCauseId = '/donate'
                                /> 
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <Cause
                                    picture = 'https://placehold.it/1080x718?text=cause-img-2'
                                    alt = 'Human right picture'
                                    caption = 'JusticeNow'
                                    category = 'Human Right'
                                    description = 'Consectetur How it worksadipisicing elit, sed do lorem ipsum dolor sit amet, eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                    progressBar = '70%'
                                    amountContributed = '$11,500.00'
                                    amountRequired = '$15,000.00'
                                    causeId = '/cause_details'
                                    donateCauseId = '/donate'
                                /> 
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <Cause
                                    picture = 'https://placehold.it/1080x718?text=cause-img-4'
                                    alt = 'Human Right picture'
                                    caption = 'Voices '
                                    category = 'Human Right'
                                    description = 'Voices for Humanity International is a non-profit organization dedicated to promoting and protecting human rights worldwide. Our mission is to amplify the voices of those who are marginalized and oppressed, and to advocate for their rights and dignity.'
                                    progressBar = '30%'
                                    amountContributed = '$5,500.00'
                                    amountRequired = '$15,000.00'
                                    causeId = '/cause_details'
                                    donateCauseId = '/donate'
                                /> 
                            </div>

                            <div class="col-md-4 col-sm-6">
                                <Cause
                                    picture = 'https://placehold.it/1080x718?text=cause-img-5'
                                    alt = 'Infrastructural development picture'
                                    caption = 'Ibiza'
                                    category = 'Infrastructural Development'
                                    description = 'Improving the quality of life for the people of Ibiza through the development of sustainable infrastructure. Our focus is on building essential infrastructure such as roads, schools, and hospitals to support the growth and prosperity of the local community.'
                                    progressBar = '55%'
                                    amountContributed = '$8,500.00'
                                    amountRequired = '$15,000.00'
                                    causeId = '/cause_details'
                                    donateCauseId = '/donate'
                                /> 
                            </div>

                        </div> {/* end causes */}

                        <div class="col-md-3">

                            <h5 class="underline mtn">Categories</h5>

                            <ul class="shop-categories">
                                <li><a href="nothing">Human Right</a></li>
                                <li><a href="nothing">Health</a></li>
                                <li><a href="nothing">Infrastructural Development</a></li>
                            </ul>

                            <h5 class="underline">Recent activities</h5>

                            <div class="owl-carousel owl-carousel-single ">
                                <div class="text-center">
                                    <a href = 'nothing'><img src="https://placehold.it/1080x718?text=kids-img-3" alt="" /></a>
                                </div> {/* end one slide */}
                                <div class="text-center">
                                   <a href = 'nothing'> <img src="https://placehold.it/1080x718?text=kids-img-2" alt="" /></a>
                                </div> {/* end one slide */}
                                <div class="text-center">
                                   <a href = 'nothing'> <img src="https://placehold.it/1080x718?text=kids-img-1" alt="" /></a>
                                </div> {/* end one slide */}
                            </div> {/* end owl-carousel */}
                        </div>
                    </div> {/* end row */}
                </div> {/* end container */}
            </section>
        </div>
    )
}
export default AllCauses
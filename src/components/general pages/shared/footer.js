import React from 'react';

// function getYear(){
//     return document.write(new Date().getFullYear())
// }
const Footer= () => {
    return(
        // <!-- ========== FOOTER ========== -->
        <footer className="footer" style={{backgroundColor:'#999'}}>
            <div className="container">
                <div className="row">
    
                    <div className="col-md-4">
                        {/* <img src="images/logo-light.svg" alt="" width="150" className="mb1"/> */}
                        <h3 >Caritas</h3>
                        <p>Donate to charity with transparency. Our user-friendly interface ensures secure transactions and clear visibility on where your money goes. Join us in making a positive impact on the world through our commitment to transparency</p>
                    </div>
    {/*
                    <div className="col-md-3 col-md-offset-2 col-sm-6">
                        <h5 className="underline mtn">Lorem ipsum</h5>
                        <ul>
                            <li><a href="index">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="index">Lorem ipsum dolor sit amet</a></li>
                            <li><a href="index">Lorem ipsum dolor sit amet</a></li>
                        </ul>
    </div> */}
{/*     
                    <div className="col-md-2 col-sm-4">
                        <h5 className="underline mtn">Shop Now</h5>
                        <ul>
                            <li><a href="index">Handmade Bags</a></li>
                            <li><a href="index">Craft Work</a></li>
                            <li><a href="index">Handmade Cloths</a></li>
                        </ul>
                    </div> 
    
                    <div className="col-md-3 col-sm-6">
                        <h5 className="underline mtn">Want To Help?</h5>
                        <ul>
                            <li><a href="index">Become Volunteer</a></li>
                            <li><a href="index">Donate Money</a></li>
                            <li><a href="index">Partner with us</a></li>
                        </ul>
                    </div>
    */}
                </div> {/* end row */}

                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h5 className="mbn"> <i className="fa fa-envelope"></i> <a href="mailto:info@caritas.com" >info@caritas.com</a></h5>
                    </div>
    
                    <div className="col-md-6 col-sm-6 text-right">
                        <h5>
                            <a href='nothing'><i className="fa fa-facebook"></i></a> <span> </span>
                            <a href='nothing' style={{marginLeft:'10px'}}><i className="fa fa-twitter"></i></a> <span> </span>
                            <a href='nothing' style={{marginLeft:'10px'}}><i className="fa fa-instagram"></i></a> <span> </span>
                            {/* <a href='nothing' style={{marginLeft:'10px'}}><i className="fa fa-youtube"></i></a> */}
                        </h5>
                    </div>
    
                    <div className="col-md-12 text-center">
                        <p> 
                            <small className="text-muted" style = {{color:'#234'}}>
                            &copy; {/* {getYear()} */}
                                Caritas.com. All Rights Reserved.
                            </small>
                        </p>
                    </div>
                </div> {/* end row */}
            </div> {/* end container */}
    
        </footer>
    )
}
export default Footer
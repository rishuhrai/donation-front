import React, { useState } from 'react';
import Cause from './shared/cause';

// import {Link} from 'react-router-dom';
// import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

const Login = () => {

        const [orgName, setOrgName] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');
        const [address, setAddress] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            // Send form data to server or perform other actions
            console.log(orgName, email, phone, address);
    };


    return ( 
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
            <section class="reg_form">
            <form onSubmit={handleSubmit}>
      <h2>Charitable Organization Registration Form</h2>

      <label htmlFor="org-name">Organization Name:</label>
      <input type="text" id="org-name" name="org-name" value={orgName} onChange={(e) => setOrgName(e.target.value)} required />

      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <label htmlFor="address">Address:</label>
      <textarea id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

      <button type="submit">Submit</button>
    </form>
            </section>
           </div>
           );
}
export default Login;
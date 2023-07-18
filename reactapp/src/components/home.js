import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/abc.png';
import personLogo from './assets/person-removebg-preview.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaCar, FaHome, FaHeart,FaHands, FaMale, FaMoneyBill,FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

import './home.css';

const NavigationBar = () => {
  const navStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    padding: '5px 10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const logoStyle = {
    width: '50px',
    height: '40px',
  };

  const personLogoStyle = {
    width: '30px',
    height: '25px',
    marginLeft: '10px',
  };

  const sidebarStyle = {
    backgroundColor: 'grey',
    padding: '20px',
    width: '200px',
    position: 'fixed',
    top: '50px',
    left: 0,
    bottom: 0,
  };

  const sidebarLinkStyle = {
    display: 'block',
  margin: '25px 0',
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  };

  const hoverStyle = {
    backgroundColor: 'blue',
    color: 'black',
  };

  const mainContentStyle = {
    marginLeft: '220px',
    padding: '20px',
  };

  const slideshowContainerStyle = {
    marginTop: '70px',
    marginLeft: '220px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  };

  const slideImages = [
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689050870/gppnraeyghm1gfn5gjvk.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051267/laaih9qtlpje4qzatgsi.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051504/jk6vuxdnnaqgusuiiycy.jpg',
    'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689051718/niuveaewbkqjsub2kn7u.png',
  ];

  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    autoplay: true,
    pauseOnHover: true,
    canSwipe: true,
  };

  const slideContainerStyle = {
    height: '10px',
    width: '400px',
    margin: '20px 0',
  };

  const slideImageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  const textStyle = {
    fontSize: '20px',
    lineHeight: '1.5',
    margin: '20px',
    textAlign: 'justify',
    marginLeft: '300px',
    fontFamily: 'Georgia',
  };

  const boxContainerStyle = {
    display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginTop: '50px',
  marginLeft: '400px',
  };

  const boxStyle = {
    width: '600px',
  height: '220px',
  backgroundColor: 'lightgray',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid gray',
  borderRadius: '5px',
  transition: 'background-color 0.3s ease',
  marginRight: '100px',
  };

  const boxTextStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  };

 
  const boxIconStyle = {
    fontSize: '48px',
    marginBottom: '-20px',
    marginTop:'20px',
  };
  
  const reviews = [
    {
      id: 1,
      name: 'Harini',
      comment: 'Great insurance portal! Helped me find the perfect coverage.',
    },
    {
      id: 2,
      name: 'Akshaya',
      comment: 'Highly recommended. Easy to use and excellent customer service.',
    },
    {
      id: 3,
      name: 'Bhuvaneshwari',
      comment: 'Impressive selection of insurance plans. Saved me money!',
    },
  ];

  const reviewContainerStyle = {
    marginTop: '50px',
    marginLeft: '350px',
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  };

  const reviewStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f7f7f7',
    width: '1000px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
   transition: 'box-shadow 0.3s ease',
  };

  const reviewNameStyle = {
    fontWeight: 'bold',
    marginBottom: '5px',
  };
  const partnerLogosContainerStyle = {
    marginTop: '5px',
    marginLeft: '350px',
    display: 'flex',
    //alignItems: 'center',
    //justifyContent: 'center',
  };

  const partnerLogoStyle = {
    width: '120px',
    height: '60px',
    margin: '15px',
  };
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '9px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    //position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    marginLeft:'240px',
    marginTop:'10px',
  };

  const socialIconStyle = {
    fontSize: '24px',
    marginRight: '10px',
    color: '#50afbf',
  };
 
  const slideshowRef = useRef(null);

  const handleSlideChange = () => {
    if (slideshowRef.current) {
      slideshowRef.current.goNext();
    }
  };

  return (
    <>
      <nav style={navStyle}>
        <Link to="/home" style={linkStyle}>
          <img src={logo} alt="Logo" style={logoStyle} />
        </Link>
        <div style={containerStyle}>
          <Link to="/home" style={linkStyle} activeStyle={hoverStyle}>
            Home
          </Link>
          <Link to="/compare" style={linkStyle} activeStyle={hoverStyle}>
            Compare
          </Link>
          <Link to="/about" style={linkStyle} activeStyle={hoverStyle}>
            About
          </Link>
          <Link to="/contact" style={linkStyle} activeStyle={hoverStyle}>
            Contact
          </Link>
          <Link to="/" style={linkStyle} activeStyle={hoverStyle}>
            Logout
          </Link>
          <img src={personLogo} alt="Person" style={personLogoStyle} />
        </div>
      </nav>
      <div style={sidebarStyle}>
        <br />
        <h2>
          <b>INSURANCES</b>
        </h2>
        <Link to="/lifeInsurance" className="xyz" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Life Insurance
        </Link>
        <Link to="/healthInsurane" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Health Insurance
        </Link>
        <Link to="/investmentPlans" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Investment Plans
        </Link>
        <Link to="/carInsurance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Car Insurance
        </Link>
        <Link to="/2wheelerInsurance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          2 Wheeler Insurance
        </Link>
        <Link to="/childsavingPlans" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Child Saving Plans
        </Link>
        <Link to="/retirementPlans" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Retirement Plans
        </Link>
        <Link to="/homeInsurance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Home Insurance
        </Link>
        <Link to="/gadgetInsurance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Gadget Insurance
        </Link>
        <Link to="/corporateInsurance" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Corporate Insurance
        </Link>
        <Link to="/petInsurane" style={sidebarLinkStyle} activeStyle={hoverStyle}>
          Pet Insurance
        </Link>
      </div>

      <div style={slideshowContainerStyle}>
        <br />
        <br />

        <div style={slideContainerStyle}>
          <Slide {...slideProperties} ref={slideshowRef}>
            {slideImages.map((image, index) => (
              <div key={index} className="each-slide">
                <img src={image} alt={`Slide ${index + 1}`} style={slideImageStyle} />
              </div>
            ))}
          </Slide>
        </div>
      </div>
      <div>
        <h3 style={textStyle}>
         
          Welcome to our Insurance Portal!<br></br>
              <br></br>
      At our Insurance Portal, we strive to provide you with<br></br>
      comprehensive insurance solutions to protect what matters<br></br>
     most to you. Whether you're looking for life insurance, health<br></br>
     insurance,auto insurance,or any other type of coverage, we've<br></br> 
     got you covered.Our portal is designed to make your insurance<br></br> 
     journey easy and hassle-free.<br></br>
          <br />
          <br />
        </h3>
        <div style={boxContainerStyle}>
          <div  className="abcd" style={boxStyle}>
            <FaCar style={boxIconStyle} />
            <h3 style={boxTextStyle}>Car Insurance</h3>
            
            <p>Get your car Insured Starting<br></br>at just ₹9 per month</p>
          </div>
          <div  className="abcd"  style={boxStyle}>
            <FaHome style={boxIconStyle} />
            <h3 style={boxTextStyle}>Home Insurance</h3>
            <p>Compare and save upto<br></br> 85% on Home Insurance</p>
            
          </div>
          <div  className="abcd" style={boxStyle}>
            <FaHeart style={boxIconStyle} />
            <h3 style={boxTextStyle}>Health Insurance</h3>
            
            <p>Find the top health insurance <br></br>plan for you only on insurify</p>
            
            
          </div>
          
        </div>
        <div    style={boxContainerStyle}>
          <div className="abcd" style={boxStyle}>
            <FaHands style={boxIconStyle} />
            <h3 style={boxTextStyle}>Life Insurance</h3>
            
            <p>Start saving now for a <br></br>worry free future</p>
          </div>
          <div  className="abcd"  style={boxStyle}>
            <FaMale style={boxIconStyle} />
            <h3 style={boxTextStyle}>Retirement Plans</h3>
            <p>Save your golden years<br></br>with our retirement plans</p>
            
          </div>
          <div  className="abcd"  style={boxStyle}>
            <FaMoneyBill style={boxIconStyle} />
            <h3 style={boxTextStyle}>Investment Plans</h3>
            
            <p>Invest ₹9K and get <br></br>a huge return of ₹1crore</p>
            
            
          </div>
          
        </div>
        
      </div>
      <div style={reviewContainerStyle}>
        <h3>What our customers are saying?</h3>
        {reviews.map((review) => (
          <div key={review.id} style={reviewStyle}>
            <p style={reviewNameStyle}>{review.name}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      
      <br></br>
      <br></br>
      
      <h3 className="abc">Our Proud Partners</h3>
      
      <div style={partnerLogosContainerStyle}>
        
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689136823/eaiuaxxjroepowdgzrw9.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689136894/images_hjtigk.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689136965/auzaqzhiqdid92qqs2bf.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137048/c3zrr9hwegwutwqzjib0.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137111/fzxx7k4qlmqu2sgghkp5.jpg'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137188/kezmijcnowhqkkurk45n.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137276/haljhc06wvmiva6klv8f.jpg'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        
      </div>
      <div style={partnerLogosContainerStyle}>
        
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137407/heuv3i3lye76jtyu94oc.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137460/auzxkcz4n6r5ubynirym.png'} alt="Partner Logo" style={partnerLogoStyle} className="partnerLogo" />
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137513/avoh2ugvcpi3itqvdysl.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137609/m1allgqiwekewbiqshjb.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137750/byskotg42puzhcgbkqqw.jpg'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137779/qla2xx1wxo7f5avdtfux.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137797/fzfl08tz1gltzehufcbn.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        
      </div>
      <div style={partnerLogosContainerStyle}>
        
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137842/a9ykxrohbxzbas4w0poz.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137888/r4fdw9bold3dvmg2xn1o.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137916/jhioanpk269xpd2t7gsv.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137951/opeyopyfdvbhirna1www.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689137981/ttvwqljb5dyghinqfeyc.jpg'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689138032/nkuc3torhs3nqcixdgva.png'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        <img src={'https://res.cloudinary.com/duj7wgdt8/image/upload/v1689138290/r4kypkgbsvebavhlpzkn.jpg'} alt="Partner Logo" style={partnerLogoStyle}  className="partnerLogo"/>
        
      </div>
      <footer style={footerStyle}>
      <div>
        <span>&copy; 2023 Insurance Portal. All rights reserved.</span>
      </div>
      <div>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={socialIconStyle} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter style={socialIconStyle} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram style={socialIconStyle} />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={socialIconStyle} />
        </a>
      </div>
    </footer>
    </>
  );
};

export default NavigationBar;

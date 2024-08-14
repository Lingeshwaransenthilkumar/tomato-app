import "./footer.css"
import { assets} from "../../assets/assets";
function Footer(){
    return(
        <>
          <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam illum molestias obcaecati dicta ex dolorem sit quis similique ipsam esse cupiditate, cumque nam voluptatem debitis temporibus ducimus mollitia quasi quia?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in touch</h2>
                    <ul>
                        <li>+12-345-678-5678</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @ <span className="tomato">Tomato.com</span> - All right reserved
            </p>
          </div>
        </>
    )
}

export default Footer;
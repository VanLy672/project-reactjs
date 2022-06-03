import "../../Asset/CSS/footer.css"

import {Link} from "react-router-dom"

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer--item">
                <div className="footer--top--left">
                    
                </div>
                <div className="footer--top--center">
                    <ul className="nav">
                        <li className="nav--item"><Link to={"/"} className="nav--link">Browse Jobs</Link></li>
                        <li className="nav--item"><Link to={"/"} className="nav--link">Countries</Link></li>
                        <li className="nav--item"><Link to={"/"} className="nav--link">About</Link></li>
                        <li className="nav--item"><Link to={"/"} className="nav--link">Help Centre</Link></li>
                    </ul>
                </div>
                <div className="footer--top--right">
                    
                </div>
            </div>
            <div className="footer--bottom footer--item">
                <div className="footer--bottom--left">
                        
                </div>
                <div className="footer--bottom--center">
                    <p className="footer--bottom--center--text">Let employers find you</p>
                    <button className="btn btn--primary"><Link className = "btn--text" to={"postCV"}>Upload Your Resume</Link></button>
                    
                </div>
                <div className="footer--bottom--right">
                        
                </div>
            </div>
        </footer>
    )
}

export default Footer;
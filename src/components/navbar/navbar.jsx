import "./navbar.css"
import {motion} from "framer-motion"

const Navbar = () =>{
    return (
        <div className="navbar">
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity: 1, scale:1}} transition={{duration:0.5}}>Sumeja Errijahi</motion.span>
                <div className="social">
                    <a href="https://facebook.com"><img src="/facebook.png" alt=""/></a>
                    <a href="https://instagram.com"><img src="/instagram.png" alt=""/></a>
                    <a href="https://ba.linkedin.com/"><img src="/linkedin.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
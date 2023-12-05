import "./hero.css";
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};


function Hero() {

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div 
                    className="textContainer" 
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    >
                    <motion.h2 variants={textVariants}>SUMEJA ERRIJAHI</motion.h2>
                    <motion.h1 variants={textVariants}>Software Engineer</motion.h1>
                </motion.div>
            </div>
            <motion.div 
                className="slidingTextContainer" 
                variants={sliderVariants} 
                initial="initial"
                animate="animate">
                Full-stack developer
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt=" "/>
            </div>
        </div>
    );
};

export default Hero
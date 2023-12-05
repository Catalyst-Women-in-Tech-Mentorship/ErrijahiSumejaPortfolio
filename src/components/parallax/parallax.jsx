import { useRef } from "react";
import './parallax.css';
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) =>{

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress,[0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress,[0, 1], ["0%", "100%"]);
    return (
        <div 
            className='parallax' 
            style={{
                background: 
                type==="services" 
                ? "linear-gradient(180deg, #f3cbcb, #c789a5)" 
                : "linear-gradient(180deg, #f3cbcb, #c789a5)",
            }}
        >
            <motion.h1 style={{y: yText }}>{type==="services" ? "What I Did?" : "What We Do?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{y: yBg, 
                backgroundImage: `url(${type==="services" ? "/planets.png" : "/sun.png"})`
            }}></motion.div>
            <motion.div style={{x: yBg}}className="stars"></motion.div>
        </div>
    )
}

export default Parallax;
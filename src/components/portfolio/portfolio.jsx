import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Bussiness WebPage",
        img: "/bussines.png",
        desc: "A standard bussiness web page that can show all important information about one company including: staff...",
        url: "https://github.com/errijahisumeja/businessWebpage",
    },
    {
        id: 2,
        title: "eLibrary Project",
        img: "/eLibrary.png",
        desc: "This web page is actually the eLibrary where you can find some books that you are interested in. You can also search books by its genres...",
        url:"https://github.com/errijahisumeja/eLibrary",
    },
    {
        id: 3,
        title: "Tic Tac Toe game",
        img: "/ticTacToe.png",
        desc: "A classic Tic Tac Toe game where you canplay with your friend or just with the computer...",
        url: "https://github.com/errijahisumeja/Tic-Tac-Toe-Game",
        
    },
    {
        id: 4,
        title: "Shopping Cart Interface",
        img: "ShoppingCart.png",
        desc: "This page provides yout to see all products, add the products in your cart...You can also sort them",
        url: "https://github.com/errijahisumeja/Shopping-Cart-Interface"
    },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper2">
          <div className="imageContainer2" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer2" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.location.href = item.url}>Visit Github</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
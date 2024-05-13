import React from 'react';
import {Container} from "../container/Container.jsx"
import Home from "../companet/home/Home.jsx";
import Categori from "../companet/categori/Categori.jsx";
import {Outlet} from "react-router";
import Info from "../companet/Info.jsx";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Container>
               <>
                   <Home/>
                   <Categori/>
                   <motion.div className="flex justify-evenly" >
                       <motion.h1
                           onClick={() => navigate("/products")}
                           className="text-[20px] font-medium cursor-pointer"
                           whileHover={{ color: "#ff6600", scale: 1.1, transition: { duration: 0.3 } }}>
                           Новинки
                       </motion.h1>
                       <motion.h1
                           onClick={() => navigate("/products")}
                           className="text-[20px] font-medium cursor-pointer"
                           whileHover={{color: "#ff6600", scale: 1.1, transition: { duration: 0.3 } }}>
                           Популярное
                       </motion.h1>
                   </motion.div>
                   <Info/>
               </>
                <Outlet/>
            </Container>
        </div>
    );
};

export default HomePage;
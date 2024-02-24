
import "./silder.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useEffect, useState } from "react";
const Silder = (prop) => {
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const [screenHeight, setScreenHeight] = useState(window.screen.height);
    const { data, sildes } = prop
    console.log(sildes)
    console.log("screenWidth", screenWidth)
    console.log("screenHeight", screenHeight)
    useEffect(() => {
        // Update screen size when the component mounts
        const updateScreenSize = () => {
            setScreenWidth(window.screen.width);
            setScreenHeight(window.screen.height);
        };

        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);



    const sliderSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: screenWidth > 1000 || screenHeight > 1400 ? sildes : 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "0",

    };
    return (
        <div>
            <div className="container  main_silder ">
        
                <div className="w-100 container mt-5 p-0">
                    <Slider {...sliderSettings}>
                        {data.map((item, index) => (
                            <div className="img_container" key={index}>
                                <img src={item.img} alt={item.location} />
                                <div className="overlay"></div>
                                <h5 >{item.location}</h5>
                                <p>{item.property} properties</p>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Silder
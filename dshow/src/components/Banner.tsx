"use client";
import Slider from "react-slick";
import Image from "next/image";
import bannerone from "@/assets/img/banner/b_black1.jpg";
import bannertwo from "@/assets/img/banner/b_exotic.jpg";
import bannerthree from "@/assets/img/banner/b_white2.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";


const Banner = () => {
    const NextArrow = (props:any) => {
        const {onClick} = props;
        return (
            <div>
                <PiCaretLeftLight />
            </div>
        );
    };
    const PrevArrow = (props:any) => {
        const {onClick} = props;
        return (
            <div>
                <PiCaretRightLight />
            </div>
        )
    };
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        PrevArror: <PrevArrow />,
    };
    return (
        <div className="relative">
            <Slider {...settings}>
                <div>
                    <Image src={bannerone} alt="bannerone" className="w-full h-full relative" />
                </div>
                <div>
                    <Image src={bannertwo} alt="bannertwo" className="w-full h-full relative" />
                </div>
                <div>
                    <Image src={bannerthree} alt="bannerthree" className="w-full h-full relative" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
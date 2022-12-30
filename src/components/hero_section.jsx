import { useState } from "react";
import hero_image from "../images/hero_img.png"


const Hero_section = () => {

    const [hash, setHash] = useState("#")


    return (
        <div class="hero_wrap">

            <div class="hero_img">
                <img src={hero_image} alt="hero image" class="h_img" />
            </div>

            <div class="hero_text">
                <p class="h_text">Solving digital problems is what we do we and we make sure we do it right. </p>
                <p class="h_sub_text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat deleniti
                    ratione doloribus, vel harum incidunt nemo vitae quas? Eveniet.</p>

                <div class="hero_ctn_wrap">
                    <a href={hash} class="p_ctn_btn">Contact us</a>
                    <a href={hash} class="ctn_btn">See projects</a>
                </div>
            </div>
        </div>
    )
}

export default Hero_section;
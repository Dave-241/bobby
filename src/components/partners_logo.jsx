import logo1 from "../images/mobile_logos/logo1.png"
import logo2 from "../images/mobile_logos/logo2.png"
import logo3 from "../images/mobile_logos/logo3.png"
import logo4 from "../images/mobile_logos/logo4.png"
import logo5 from "../images/mobile_logos/logo5.png"
import logo6 from "../images/mobile_logos/logo6.png"

const Partner_logo = () => {


    return (
        <>
            <h3 class="partner_wrap">our partners</h3>

            <div class="partner_logo_wrap">

                <div class="partner_img_wrap">
                    <img src={logo1} alt="" class="partner_img" />
                </div>

                <div class="partner_img_wrap">
                    <img src={logo2} alt="" class="partner_img" />
                </div>

                <div class="partner_img_wrap">
                    <img src={logo3} alt="" class="partner_img" />
                </div>

                <div class="partner_img_wrap">
                    <img src={logo4} alt="" class="partner_img" />
                </div>

                <div class="partner_img_wrap">
                    <img src={logo5} alt="" class="partner_img" />
                </div>

                <div class="partner_img_wrap">
                    <img src={logo6} alt="" class="partner_img" />
                </div>

            </div>
        </>
    )
}

export default Partner_logo;
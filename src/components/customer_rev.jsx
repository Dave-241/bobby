import custom1 from "../images/review1.png"
import custom2 from "../images/review3.png"
import custom3 from "../images/review2.png"

const Customer_rev = () => {


    return (
        <>
            <h3 class="review_header">Customer reviews</h3>

            <div class="reveiw_wrap">

                <div class="review_small_deco"></div>
                <div class="review_big_deco"></div>

                <div class="review_text_wrap">
                    <p class="review_text" id="comment">consectetur nesciunt commodi maiores quidem eum est labore illo
                        doloreadipisicin, psa laudantium, loritaque nihil ex eaque possimus molestias libero? Qui odit
                        beatae,ratione, quasi quia temporibus excepturi et deserunt sapiente blanditiis eligendi repellat.
                        Loremipsum dolor sit amet consectetur adipisicin</p>


                    <div class="review_image_wrap">

                        <div class="review_img" id="rev1" onclick="prev_review()">
                            <img src={custom1} alt="" class="customer_img" />
                        </div>
                        <div class="review_img" id="rev2" onclick="normal_review()">
                            <img src={custom2} alt="" class="customer_img" />
                        </div>
                        <div class="review_img" id="rev3" onclick="next_review()">
                            <img src={custom3} alt="" class="customer_img" />
                        </div>

                    </div>

                    <div class="customer_wrap">
                        <p class="customer_name" id="name">emma somandina</p>
                        <p class="customer_position" id="position">programmer</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Customer_rev;
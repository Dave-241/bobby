import computer from "../images/computer.png"

const Happy_client = () => {


    return (
        <div class="happy_client_wrap">

            <div class="client_wrap">
                <div class="client_img_wrap">
                    <img src={computer} alt="" class="client_img" />
                </div>

                <div class="client_text_wrap">
                    <p class="client_no">350</p>
                    <p class="client_class">happy client</p>
                </div>
            </div>

            <div class="client_wrap">
                <div class="client_img_wrap" id="computer_img_2">
                    <img src={computer} alt="" class="client_img" />
                </div>

                <div class="client_text_wrap" id="computer_text_2">
                    <p class="client_no">350</p>
                    <p class="client_class">happy client</p>
                </div>
            </div>

            <div class="client_wrap">
                <div class="client_img_wrap">
                    <img src={computer} alt="" class="client_img" />
                </div>

                <div class="client_text_wrap">
                    <p class="client_no">350</p>
                    <p class="client_class">happy client</p>
                </div>
            </div>

            <div class="client_wrap">
                <div class="client_img_wrap" id="computer_img_4">
                    <img src={computer} alt="" class="client_img" />
                </div>

                <div class="client_text_wrap" id="computer_text_4">
                    <p class="client_no">350</p>
                    <p class="client_class">happy client</p>
                </div>
            </div>
        </div>
    )
}

export default Happy_client;
import aboutImg from "../images/about.png"

const About = () => {


    return (
        <div class="about_wrap">
            <div class="about_img_wrap">
                <img src={aboutImg} alt="about us" class="about_img" />
            </div>

            <div class="about_txt_wrap">
                <p class="about_head">About Us</p>
                <p class="about_exerpt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias natus eos quo,
                    enim adipisci delectus minima id cum magnam cumque, molestiae aspernatur ab tenetur deleniti
                    sapiente. Veniam ipsa facere dolore modi omnis! Fugit esse ratione corporis. Ipsam, sapiente quo
                    modi incidunt quod qui, quae saepe deserunt ad rerum nemo ullam? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Voluptatum saepe cum placeat vitae, deleniti atque nisi hic delectus
                    laboriosam iste.</p>
                <a href="#" class="about_ctn">learn more</a>
            </div>
        </div>
    )
}

export default About;
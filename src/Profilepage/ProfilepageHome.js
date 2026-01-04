import ProfileImage from "../assets/sam.jpg"
import "./Profile.css"

function ProfilepageHome() {
    return(
        <div className="profile-container">
        <div className="profile-picture">
            <img src= {ProfileImage} alt="Profile Picture"/>
        </div>

        <div className="profile-info">
            <h1>Destiny Okpone</h1>
            <p>Hi! I’m a web developer and tech enthusiast. I love creating beautiful and interactive websites.</p>
        </div>
        <div className="contact-info">
            <p>Email: destiny@example.com</p>
            <p>Phone: +234 123 456 7890</p>
        </div>

        <div className="skills">
            <h2>Skills & Hobbies</h2>
            <ul>
                <li>Web Development</li>
                <li>React</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Swimming</li>
            </ul>
        </div>
        <div className="social-links">
            <h2>Connect with Me</h2>
            <a href="https://github.com/S0NOFGOD?tab=repositories" target="_blank">GitHub</a> |
            <a href="https://www.linkedin.com/in/destiny-okpone-b2b7872b9/" target="_blank">LinkedIn</a> |
            <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>

    </div>
    )
}

export default ProfilepageHome
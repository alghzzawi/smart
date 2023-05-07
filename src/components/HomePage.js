import React from "react";
import image_nav from "./assets/navsam.png"
import profile from "./assets/profile.jpg"

class HomePage extends React.Component {
    render() {
        return (
            <>
                <div className="HomePage">
                    <section className="navbar">
                        <div className="welcome_massege">
                            <p>Welcome back, Kate!</p>
                            <p>We are happy to heve you here!</p>
                            <p className="user_status">Students -- Journal</p>
                        </div>
                        <form className="search_form">
                            <input type="text" id="search" placeholder="Search..."/>
                        </form>
                        <div className="image_nav">
                            <img alt="" src={image_nav} />
                        </div>
                        <div className="image_userProfile">
                            <img alt="userProfile" src={profile} />
                        </div>
                    </section>
                </div>


            </>
        )
    }
}

export default HomePage;
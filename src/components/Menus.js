import React from "react";

class Menus extends React.Component {
    render() {
        return (
            <>

                <div className="Menus_nav">
                    <section className="logo">
                        <p>💡 SMART</p>
                    </section>
                    <nav>
                        <ul className="ul_menus">
                            <li><p className="a_menus" href="default.asp">📅 Dashboard</p></li>
                            <li><p className="a_menus" href="news.asp">📅 Courses</p></li>
                            <li><p className="a_menus" href="contact.asp">📅 Classes</p></li>
                            <li><p className="a_menus" href="about.asp">📅 Timeteble</p></li>
                            <li><p className="a_menus" href="about.asp">📅 Students</p></li>
                            <li><p className="a_menus" href="about.asp">📅 Messages</p></li>
                        </ul>
                    </nav>
                    <section>
                        <button className="Logout_button">
                            Log Out
                        </button>
                    </section>
                </div>

            </>
        )
    }
}

export default Menus;
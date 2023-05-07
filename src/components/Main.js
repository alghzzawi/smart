import React from "react";
import Menus from "./Menus";
import HomePage from "./HomePage";
import UsersTable from "./UsersTable"

class Main extends React.Component{
    render(){
        return(
            <div className="page">
                <Menus/>
                <div>
                    <HomePage/>
                    <UsersTable/>
                </div>
            </div>
        )
    }
}

export default Main;
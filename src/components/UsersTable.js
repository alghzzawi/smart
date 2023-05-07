import React from "react";
import axios from "axios";

import profile from "./assets/profile.jpg"


class UsersTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount = () => {

        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((result) => {
                // console.log(result.data)
                this.setState({
                    users: result.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };
    render() {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Group</th>
                            <th>HomeWorks</th>
                            <th>Attendance</th>
                            <th>Projects</th>
                            <th>Grade</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <div className="usersName">
                                        <input type="radio" name="option" value="Option 1" />
                                        <img alt="userProfile" src={profile} />
                                        <div className="name_email">
                                            <p>Cortney Heny</p>
                                            <p>email</p>
                                        </div>
                                    </div>
                                </label>
                            </td>
                            <td>Design 53</td>
                            <td>0/12</td>
                            <td>4/7</td>
                            <td>2/3</td>
                            <td>80/100</td>
                        </tr>
                        {this.state.users.map(itme => {
                            return (
                                <tr>
                                    <td>
                                        <label>
                                            <div className="usersName">
                                                <input type="radio" name="option" value="Option 1" />
                                                <img alt="userProfile" src={profile} />
                                                <div className="name_email">
                                                    <p> {itme.name} </p>
                                                    <p> {itme.email} </p>
                                                </div>
                                            </div>
                                        </label>
                                    </td>
                                    <td>Design 53</td>
                                    <td>0/12</td>
                                    <td>4/7</td>
                                    <td>2/3</td>
                                    <td>80/100</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="table_foot">
                    <p>
                       -- Prev
                    </p>
                    <p>
                        next --
                    </p>
                </div>

            </>
        )
    }
}

export default UsersTable;
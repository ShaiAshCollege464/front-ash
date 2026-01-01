import CustomInput from "./CustomInput.jsx";
import CustomButton from "./CustomButton.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function RegistrationPage () {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [errorCode, setErrorCode] = useState(null);

    const getAllUsers = () => {
        axios.get("http://localhost:8989/all")
            .then((response) => {
                setUsers(response.data.userList)
            })
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    const errorCodeMessage = () => {
        if (errorCode == 3000) {
            return "First name is required";
        } else if (errorCode == 3001) {
            return "Last name is required";
        }
        return "";
    }


    return (
        <>
            {
                errorCode != null &&
                <>
                    Something went wrong
                    <div>
                        {errorCodeMessage()}
                    </div>
                </>
            }

            <div>
                <div style={{
                    border: "1px solid grey",
                    padding: 30,
                    margin: 40,
                    backgroundColor: "#FCFBF4",
                    borderRadius: 10
                }}>
                    <CustomInput
                        placeholder={"Enter Username"}
                        value={username} onChange={(event) => {
                        setUsername(event.target.value)
                    }}
                    />
                    <CustomInput
                        placeholder={"Enter Password"}
                        value={password} onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                    />
                    <CustomButton
                        text={"Add"}
                        disabled={username.length == 0 || password.length == 0 || buttonDisabled}
                        action={() => {
                            setButtonDisabled(true);
                            axios.get("http://localhost:8989/create-user?username=" + username + "" +
                                "&password=" + password + "&phone=1234567")
                                .then((response) => {
                                    setButtonDisabled(false)
                                    if (response.data.success) {
                                        getAllUsers();
                                        setUsername("");
                                        setPassword("")
                                    } else {
                                        setErrorCode(response.data.errorCode);
                                    }

                                })
                        }}
                    />
                </div>

            </div>
        </>

    )

}

export default RegistrationPage;
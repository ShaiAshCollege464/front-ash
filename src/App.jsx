import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import CustomButton from "./CustomButton.jsx";
import CustomInput from "./CustomInput.jsx";
import RegistrationPage from "./RegistrationPage.jsx";

function App() {
    const [showLogin, setShowLogin] = useState(true)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorCode, setErrorCode] = useState(0);

    return (
        <>
            {
                showLogin ?
                    <>
                        <CustomInput
                            placeholder={"Enter your username"}
                            value={username}
                            onChange={(event) => {
                                setUsername(event.target.value)
                            }}
                        />
                        <CustomInput
                            type={showPassword ? "text" : "password"}
                            placeholder={"Enter your password: "}
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value)
                            }}
                        />
                        <button onClick={() => {
                            setShowPassword(!showPassword)
                        }}>
                            {showPassword ? "Hide" : "Show"}
                        </button>
                        <CustomButton text={"Login"} action={() => {
                            axios.get("http://localhost:8989/login?username=" + username + "" +
                                "&password=" + password + "&phone=1234567")
                                .then((response) => {
                                    if (response.data.success) {
                                        alert("Success");
                                    } else {
                                        setErrorCode(response.data.errorCode);
                                    }
                                })

                        }}/>
                        {
                            errorCode > 0 &&
                            <>
                                {
                                    errorCode == 3002 ?
                                        <>
                                            Wrong Password
                                        </> :
                                        <>
                                            You have no account under this username
                                        </>
                                }
                            </>
                        }
                    </>
                    :
                <RegistrationPage />
            }
        </>
    )
}

export default App

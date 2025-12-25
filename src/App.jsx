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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            {
                showLogin ?
                    <>
                        <CustomInput
                            placeholder={"Enter your email"}
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
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
                    </>
                    :
                <RegistrationPage />
            }
        </>
    )
}

export default App

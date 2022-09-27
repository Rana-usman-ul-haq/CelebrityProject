import axios from 'axios';
import { createContext, useEffect, useState } from "react";
import swal from 'sweetalert';

export const AdminContext = createContext();

export default function AdminProvider({ children }) {
    const [admin, setAdmin] = useState(null);
    const [token, setToken] = useState()
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    // console.log(localStorage)
    useEffect(() => {
        axios.get("https://backend.celebrity.sg/api/v1/admin/currentAdmin", {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('adminCelebrity')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    setAdmin(res.data.admin);

                }
            })
            .catch(err => {
                setAdmin(null);
            });

    }, []);



    const login = async (email, password) => {
        await axios.post('https://backend.celebrity.sg/api/v1/admin/login', {
            email,
            password
        })
            .then(res => {
                if (res.status === 200) {
                    setToken(res.data.token);
                    setIsAuthenticating(true);
                    localStorage.setItem('verify-tokens', res.data.token);
                    setToken(res.data.token);
                }
            })
            .catch(error => {
                // alert(error.response.data.message);
                swal({
                    title: "Attention",
                    text: `${error.response?.data?.message}`,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });

    }

    const verifyOtp = async (otp) => {
        await axios.post('https://backend.celebrity.sg/api/v1/admin/verify-otp/', {
            otp
        }, {
            headers: {
                "authorization": `Bearer ${localStorage.getItem('verify-tokens')}`
         }
        })
            .then(res => {
                if (res.status === 200) {
                    setIsAuthenticating(false);
                    setAdmin(res.data.admin);
                    localStorage.setItem('adminCelebrity', res.data.token);
                    localStorage.removeItem('verify-tokens');
                }
            })
            .catch(error => {
                // alert(error.response.data.message);
                swal({
                    title: "Attention",
                    text: `${error.response?.data?.message}`,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });
    }

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem("adminCelebrity");
    }

    return (
        <AdminContext.Provider value={{
            admin,
            isAuthenticating,
            setAdmin,
            logout,
            login,
            verifyOtp,
            token,
            setIsAuthenticating,
        }}>{children}</AdminContext.Provider>
    )
}
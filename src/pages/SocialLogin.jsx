import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../authProvider/AuthProvider";

export default function SocialLogin() {
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
    }

    return (
        <div className="flex justify-center align-middle gap-5">
            <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                <FcGoogle />
            </button>
            <button className="btn btn-circle btn-outline">
                <FaFacebookF />
            </button>
            <button className="btn btn-circle btn-outline">
                <FaGithub />

            </button>
        </div>
    )
}

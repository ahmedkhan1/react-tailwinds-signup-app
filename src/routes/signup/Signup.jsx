import React from "react";
import Banner from "./banner/Banner";
import SignUpForm from "./signupForm/SignupForm";

const SignUp = () => {
    return (
        <div className="flex h-screen bg-black">
            {/* ============ BANNER SECTION ============ */}
            <Banner />

            {/* ============ SIGNUP FORM SECTION ============ */}
            <SignUpForm />
        </div>
    );
};

export default SignUp;

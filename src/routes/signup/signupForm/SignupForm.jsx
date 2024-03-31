import React, {useEffect, useState} from "react";
import validations from 'utils/validations';
import Header from "../header/Header";

const SignUpForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [terms, setTerms] = useState(false);
    const [termsMsg, setTermsMsg] = useState(false);

    const [email, setEmail] = useState("");
    const [emailMsg, setEmailMsg] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordMsg, setPasswordMsg] = useState(false);
    const [togglePassword, setTogglePassword] = useState(false);

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");


    useEffect(()=>{
        if(terms){
            console.log(terms);
            setOption1("yes");
            setOption2("yes");
            setOption3("yes");
        }
    }, [terms]);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };

    const formHandler = (e) =>{
        e.preventDefault();
        let valid = true;

        setEmailMsg("");
        setPasswordMsg("");
        setTermsMsg("");
        
        // Check required
        if(!email){
            valid = false;
            setEmailMsg("This field cannot be left blank");
        }

        if(!password){
            valid = false;
            setPasswordMsg("This field cannot be left blank");
        }

        if(!terms){
            valid = false;
            setTermsMsg("Please accept the terms and conditions to finish the signup");
        }

        // format validation
        if(!validations.validate("email", email)){
            valid = false;
            setEmailMsg("Enter a valid email address");
        }

        if(!validations.validate("password", password)){
            valid = false;
            setPasswordMsg("Use 8 or more characters with a mix of letters, numbers and symbols");
        }
        const username = email.split('@')[0];
        if(password.includes(username)){
            valid = false;
            setPasswordMsg("The password should not contain parts of the username");
        }

        if(valid){

        }
    }

    const handleTerms = ()=>{
        setTerms(!terms);
    }

    const handleTogglePassword = () => {
        setTogglePassword(!togglePassword);
    }

    const handlePassword = (e) => {
        setPasswordMsg("");
        setPassword(e.target.value);
        if(!validations.validate("password", e.target.value)){
            setPasswordMsg("Use 8 or more characters with a mix of letters, numbers and symbols");
        }
        const username = email.split('@')[0];
        if(e.target.value.includes(username)){
            setPasswordMsg("The password should not contain parts of the username");
        }
    }

    return (
        <div className="relative bg-white rounded-tl-[16px] rounded-bl-[16px] w-full lg:w-3/5 flex items-center justify-center overflow-y-auto">
            {/* Language Dropdown */}
            <Header />

            <div className={(isOpen)? "w-full animate-form": "w-full"}>
                <div className="logo flex justify-center items-center h-[80px]">
                    <svg className="mr-[10.21px]" xmlns="http://www.w3.org/2000/svg" width="33" height="22" fill="none"><path fill="currentColor" fillRule="evenodd" d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z" clipRule="evenodd"></path></svg>
                    <span className="sc-da9128ae-0 bmXElW">
                        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="24" fill="none" className="sc-da9128ae-1 bOQHzD"><path fill="currentColor" d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"></path></svg>
                    </span>
                </div>
                <p className="text-2xl mb-6 text-center font-light leading-9 text-[#5e5e5e]">
                    Get better data with conversational forms, surveys,<br/> quizzes & more.
                </p>
                <form className={(isOpen)? "space-y-4 w-[256px] m-auto mb-2": "space-y-4 w-[256px] m-auto"} onSubmit={formHandler}>
                    <div>
                        <input
                            className="w-full px-2 py-1.5 border rounded-sm"
                            type="email"
                            id="email"
                            onChange={(e)=> setEmail(e.target.value)}
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    {
                        emailMsg &&
                        <div className="error-msg-container flex">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8 2.8L7.8 8.2H6.2L6 2.8H8ZM7 11.4C7.66274 11.4 8.2 10.8627 8.2 10.2C8.2 9.53726 7.66274 9 7 9C6.33726 9 5.8 9.53726 5.8 10.2C5.8 10.8627 6.33726 11.4 7 11.4Z" fill="#E34843"/>
                            </svg>
                            <p className="error text-red-500 text-sm ml-2">{emailMsg}</p>
                        </div>
                    }

                    <div className="password-field relative">
                        <input
                            className="w-full px-2 py-1.5 border rounded-sm"
                            type={togglePassword? "text" : "password"}
                            id="password"
                            onChange={(e)=> handlePassword(e)}
                            name="password"
                            placeholder="Password"
                        />

                        <div 
                            className="password-toggle absolute flex top-3 right-3 opacity-15 cursor-pointer"
                            onClick={handleTogglePassword}
                        >
                            <svg className={!togglePassword ? "w-4" : "w-4 hidden"} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M16 16c-.8125-.8125 1.1875-4 0-4-2.1875 0-4 1.8125-4 4s1.8125 4 4 4 4-1.8125 4-4c0-1-3.375.8125-4 0Zm0-10C5.625 6 0 14.8125 0 16.1875 0 17.625 5.625 26 16 26s16-8.8125 16-10S26.375 6 16 6Zm0 16c-3.375 0-6-2.625-6-6s2.625-6 6-6 6 2.625 6 6-2.625 6-6 6Zm0 0'/></svg>
                            <svg className={togglePassword ? "w-4" : "w-4 hidden"}  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><path d='M27.375 21.813 22 16.375V16c0-3.375-2.625-6-6-6h-.375L12 6.375C13.375 6.187 14.625 6 16 6c10.375 0 16 8.813 16 10 0 .625-1.625 3.375-4.625 5.813ZM20 25.625c-1.375.188-2.625.375-4 .375-10.375 0-16-8.375-16-9.813 0-.812 1.625-3.562 4.625-6L10 15.625V16c0 3.375 2.625 6 6 6h.375ZM6.375 4 28 25.625 25.625 28 4 6.375Zm0 0'/></svg>
                        </div>
                    </div>
                    {
                        passwordMsg &&
                        <div className="error-msg-container flex">
                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8 2.8L7.8 8.2H6.2L6 2.8H8ZM7 11.4C7.66274 11.4 8.2 10.8627 8.2 10.2C8.2 9.53726 7.66274 9 7 9C6.33726 9 5.8 9.53726 5.8 10.2C5.8 10.8627 6.33726 11.4 7 11.4Z" fill="#E34843"/>
                            </svg>
                            <p className="error text-red-500 text-sm ml-2">{passwordMsg}</p>
                        </div>
                    }



                    <div className="my-5">
                        <label className="text-sm flex">
                            <input
                                className="cursor-pointer w-[45px] h-[29px] mr-3 text-black-500" 
                                id="terms_and_consents"
                                onChange={handleTerms}
                                aria-labelledby="label-terms_and_consents" 
                                data-checked="true" 
                                type="checkbox"
                            />
                            <div>
                            I agree to Typeform’s <a className="cursor-pointer underline" target="_blank" rel="noreferrer" href="https://www.typeform.com/terms-service/">Terms of Service</a> , <a className="underline" target="_blank" rel="noreferrer" href="https://www.typeform.com/privacy-policy/">Privacy Policy</a> and <a className="underline" target="_blank" rel="noreferrer" href="https://www.typeform.com/privacy-policy/">Data Processing Agreement</a>
                            </div>
                        </label>
                    </div>
                    {
                        termsMsg &&
                        <div className="error-msg-container flex">
                            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7ZM8 2.8L7.8 8.2H6.2L6 2.8H8ZM7 11.4C7.66274 11.4 8.2 10.8627 8.2 10.2C8.2 9.53726 7.66274 9 7 9C6.33726 9 5.8 9.53726 5.8 10.2C5.8 10.8627 6.33726 11.4 7 11.4Z" fill="#E34843"/>
                            </svg>
                            <p className="error text-red-500 text-sm ml-2">{termsMsg}</p>
                        </div>
                    }


                    <div className="my-4">
                        <label className="flex items-center cursor-pointer justify-between" onClick={toggleAccordion}>
                            <span className="ml-2 text-sm pl-4 py-2">
                            See options
                            </span>
                            <svg
                            className={`w-5 h-5 transition-transform duration-300 transform ${
                                isOpen ? "rotate-180" : "rotate-180"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
                            />
                            </svg>
                        </label>

                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-96" : "max-h-0"
                            }`}
                        >
                            <div className="ml-7 mt-2">
                                <div className="flex flex-col mb-2 text-sm">
                                    <p className="mr-2 text-sm mb-2">Get useful tips, inspiration, and offers via e-communication.</p>
                                    <div className="flex mb-3">
                                        <div className="flex mr-5">
                                            <input type="radio" name="option1" onChange={() => setOption1("yes")} value={option1} checked={(option1 ==='yes')} id="option1-yes" className="mr-3 w-5" />
                                            <label htmlFor="option1-yes">Yes</label>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" name="option1" id="option1-no" onChange={() => setOption1("no")} value={option1} checked={(option1 ==='no')} className="mr-3 w-5" />
                                            <label htmlFor="option1-no">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2 text-sm">
                                    <p className="mr-2 text-sm mb-2">Tailor Typeform to my needs based on my activity. <a href="/" className="hover:underline"> See Privacy Policy</a></p>
                                    <div className="flex mb-3">
                                        <div className="flex mr-5">
                                            <input type="radio" name="option2" onChange={() => setOption2("yes")} checked={(option2 ==='yes')} id="option2-yes" className="mr-3 w-5" />
                                            <label htmlFor="option2-yes">Yes</label>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" name="option2" id="option2-no"  onChange={() => setOption2("no")} checked={(option2 ==='no')} className="mr-3 w-5" />
                                            <label htmlFor="option2-no">No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2 text-sm">
                                    <p className="mr-2 text-sm mb-2">Enrich my data with select third parties for more relevant content. <a href="/" className="hover:underline"> See Privacy Policy</a></p>
                                    <div className="flex mb-3">
                                        <div className="flex mr-5">
                                            <input type="radio" name="option3" id="option3-yes" onChange={() => setOption3("yes")} checked={(option3 ==='yes')} className="mr-3 w-5" />
                                            <label htmlFor="option3-yes">Yes</label>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" name="option3" id="option3-no" onChange={() => setOption3("no")} checked={(option3 ==='no')} className="mr-3 w-5" />
                                            <label htmlFor="option3-no">No</label>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-400">You can update your preferences in your Profile at any time</p>
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-full bg-black text-white py-2 rounded-xs"
                        type="submit"
                    >
                    Create my free account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;

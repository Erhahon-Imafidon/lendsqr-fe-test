import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import SignIn from '../../assets/images/sign-in.png';
import { Header, AppInput, FormButton } from '../../components/index.ts';
import './login.scss';

const Login = () => {
    const [showPwd, setShowPwd] = useState(false);

    const handleShowPwd = () => {
        setShowPwd(!showPwd);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <section className="image bg-secondary-light-5">
                <img src={Logo} alt="logo" className="logoImg" />

                <div className="welImg">
                    <img src={SignIn} alt="Sign image" />
                </div>
            </section>

            <section className="welcome bg-white">
                <Header
                    title={'Welcome!'}
                    subTitle={'Enter details to login.'}
                />

                <form onSubmit={handleSubmit}>
                    <AppInput placeholder="Email" />

                    <AppInput
                        placeholder="Password"
                        type={showPwd ? 'text' : 'password'}
                        isShown={true}
                        onClick={handleShowPwd}
                    />

                    <Link to="#" className="text-lime-green font-md">
                        Forgot PASSWORD?
                    </Link>

                    <FormButton text="Log in" onClick={() => {}} />
                </form>
            </section>
        </div>
    );
};

export default Login;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Logo from '../../assets/images/logo.png';
import SignIn from '../../assets/images/sign-in.png';
import {
    Header,
    AppInput,
    FormButton,
    ErrorMessage,
} from '../../components/index.ts';
import './login.scss';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('this field is required'),
    pwd: Yup.string().required('password is required'),
});

const Login = () => {
    const [showPwd, setShowPwd] = useState(false);

    const navigate = useNavigate();

    const handleShowPwd = () => {
        setShowPwd(!showPwd);
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

                <Formik
                    initialValues={{ email: '', pwd: '' }}
                    onSubmit={(_, { resetForm }) => {
                        // Navigate to the dashboard and replace the current route
                        document.startViewTransition(() => {
                            navigate('/dashboard', { replace: true });
                        });

                        // Reset the form fields
                        resetForm();
                    }}
                    validationSchema={validationSchema}
                >
                    {({
                        values,
                        errors,
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        touched,
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <AppInput
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                            />

                            <ErrorMessage
                                error={errors.email || ''}
                                visible={!!touched.email}
                            />

                            <AppInput
                                name="pwd"
                                type={showPwd ? 'text' : 'password'}
                                placeholder="Password"
                                isShown={true}
                                onClick={handleShowPwd}
                                value={values.pwd}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="off"
                            />

                            <ErrorMessage
                                error={errors.pwd || ''}
                                visible={!!touched.pwd}
                            />

                            <Link to="#" className="text-lime-green font-md">
                                Forgot PASSWORD?
                            </Link>

                            <FormButton text="Log in" />
                        </form>
                    )}
                </Formik>
            </section>
        </div>
    );
};

export default Login;

import Button from "../Button";
import {useCallback} from "react";
import loginForm, {OnSubmit} from "./login-form";

type Props = {
    onSubmit: OnSubmit
}

const LoginForm = (
    {
        onSubmit,
    }: Props
) => {
    const getRef = useCallback((form) => {
        if(form) loginForm(form, onSubmit);
    }, []);
    return (
        <div className="my-login-form">
            <form ref={getRef}>

                <input type="email" placeholder="eMail" />

                <input type="password" placeholder="Password" />

                <Button variant="primary" size="medium" text="Submit" />

            </form>
        </div>
    )
}

export default LoginForm

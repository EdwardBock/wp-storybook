import {ComponentMeta} from "@storybook/react";
import LoginForm from "./LoginForm";

export default {
    title: 'LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof LoginForm>;

const onSubmit = (success: true|Error) =>
    async (email: string, password: string): Promise<true|Error> => {
        console.debug("on submit", email, password);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(success);
            }, 2000);
        })
    }

export const Success = () => <LoginForm
    onSubmit={onSubmit(true)}
/>
export const Fail = () => <LoginForm
    onSubmit={onSubmit(new Error("Something went wrong."))}
/>

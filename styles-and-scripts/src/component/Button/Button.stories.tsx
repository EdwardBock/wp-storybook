import {ComponentMeta, ComponentStory} from "@storybook/react";
import Button from "./Button";

export default {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'error'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            type: "boolean",
        }
    },
    args: {
        variant: "primary",
        size: "medium",
        disabled: false,
    }
} as ComponentMeta<typeof Button>;

export const _Button: ComponentStory<typeof Button> = (args) => <Button {...args} />;

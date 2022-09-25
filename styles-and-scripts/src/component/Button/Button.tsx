type Props = {
    text?: string
    variant?: "primary" | "secondary"
    size?: "small" | "medium" | "large"
    type?: "submit" | "button"
    disabled?: boolean
}

const Button = (
    {
        text = "Button",
        variant = "primary",
        size = "medium",
        type = "submit",
        disabled = false,
    }: Props
) => {
    return (
        <button
            className="my-button"
            data-variant={variant}
            data-size={size}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button

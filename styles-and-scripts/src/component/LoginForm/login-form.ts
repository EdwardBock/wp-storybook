
export type OnSubmit = (email: string, password: string) => Promise<true|Error>

const handleLoginForm = (
    form: HTMLFormElement,
    onSubmit: OnSubmit,
) => {

    const email = form.querySelector<HTMLInputElement>("input[type=email]");
    const password = form.querySelector<HTMLInputElement>("input[type=password]");
    const button = form.querySelector<HTMLButtonElement>("button[type=submit]");

    const onLogin = async (e: SubmitEvent) => {
        e.preventDefault();
        if(button.disabled) return;
        button.disabled = true;

        const emailValue = email.value;
        const passwordValue = password.value;

        const valid = await onSubmit(emailValue, passwordValue);
        form.querySelector("[data-form-error]")?.remove();
        if(valid instanceof Error) {
            const messageElement = document.createElement("p");
            messageElement.setAttribute("data-form-error", "");
            messageElement.textContent = valid.message;
            form.append(messageElement);
            button.disabled = false;
            return;
        }

        form.innerHTML = "";

        const successMessage = document.createElement("p");
        successMessage.textContent = "You are now logged in.";
        form.append(successMessage);

        form.removeEventListener("submit", onLogin);
    }

    form.addEventListener("submit", onLogin);
}

export default handleLoginForm;

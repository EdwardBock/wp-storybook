import domReady from '@wordpress/dom-ready';
import './styles/theme.css';
import loginForm, {OnSubmit} from './component/LoginForm/login-form';

domReady( function () {
    const onSubmit: OnSubmit = async (email, password) => {
        // authentication request
        return true;
    };

    const forms = document.querySelectorAll<HTMLFormElement>(".my-login-form");
    forms.forEach(form => {
        loginForm(form, onSubmit);
    });
} );

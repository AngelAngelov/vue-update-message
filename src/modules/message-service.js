import Message from './message';

class MessageService {
    constructor(props) {
        this.counter = 1;
        this.isInitialCall = true;
        this.alertWrapper = null;
    }

    init(options) {
        this.defaultOptions = {
            ...this.defaultOptions,
            options
        }
        let body = document.querySelector('body');
        this.alertWrapper = document.createElement("div");
        this.alertWrapper.className = "custom-alert-container col-md-4 col-sm-6 col-xs-12";
        body.insertBefore(this.alertWrapper, body.firstChild);
        this.addStyleInHeader();
    }

    show(props) {
        this.message = props.message;
        this.type = props.type;
        this.userSettings = props.userOptions;

        let options = {
            ...this.defaultOptions,
            ...this.userSettings,
            ...this.constOptions
        }

        let container = null;

        if (options.element) {
            container = document.querySelector(options.element);
        } else {
            container = this.alertWrapper;
        }

        let message = new Message({
            message: this.message,
            type: this.type,
            options,
            container: container
        });

        message.mount();
    };

    addStyleInHeader() {
        var css = this.containerStyle(),
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    };

    containerStyle() {
        return `.custom-alert-container {
                    position: ${this.constOptions.position};
                    ${this.constOptions.placement}: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                }`
    };

    //default options may be ovverridden by the user
    defaultOptions = {
        duration: 3000,
        dismissable: false,
        isSticky: false
    };
    //const options shoul never be changed by the user 
    constOptions = {
        position: 'fixed',
        width: '20vw',
        placement: 'top'
    };
}

export default new MessageService();
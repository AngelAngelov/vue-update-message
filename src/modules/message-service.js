import Message from './message';

class MessageService {
    constructor(props) {
        this.counter = 1;
        this.isInitialCall = true;
        this.containers = [];
        this.containers['top'] = null;
        this.containers['top-left'] = null;
        this.containers['top-right'] = null;
        this.containers['bottom'] = null;
        this.containers['bottom-left'] = null;
        this.containers['bottom-right'] = null;
    }

    init(options) {
        this.constOptions = {
            ...this.constOptions,
            ...options
        }

        let body = document.querySelector('body');
        this.addStyleInHeader();

        this.containers['top'] = document.createElement("div");
        this.containers['top'].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 top";
        body.insertBefore(this.containers['top'], body.firstChild);

        this.containers['top-left'] = document.createElement("div");
        this.containers['top-left'].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 top-left";
        body.insertBefore(this.containers['top-left'], body.firstChild);

        this.containers['top-right'] = document.createElement("div");
        this.containers['top-right'].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 top-right";
        body.insertBefore(this.containers['top-right'], body.firstChild);

        this.containers['bottom'] = document.createElement("div");
        this.containers['bottom'].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 bottom";
        body.insertBefore(this.containers['bottom'], body.lastChild);

        this.containers['bottom-left'] = document.createElement("div");
        this.containers['bottom-left'].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 bottom-left";
        body.insertBefore(this.containers['bottom-left'], body.lastChild);

        this.containers['bottom-right'] = document.createElement("div");
        this.containers['bottom-right'].className = "custom-message-container col-md-4 col-sm-6 col-xs-12 bottom-right";
        body.insertBefore(this.containers['bottom-right'], body.lastChild);
    }

    show(props) {
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
            container = this.containers[options.placement];
        }

        if (this.constOptions.mode === 'single') {
            if (this.message) {
                this.message.hide();
            }

            this.message = new Message({
                message: props.message,
                type: props.type,
                options,
                container: container
            });
            this.message.mount();
        } else if (this.constOptions.mode === 'stack') {
            let message = new Message({
                message: props.message,
                type: props.type,
                options,
                container: container
            });

            message.mount();
        }
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
        let css = '';

        let elCss = `.update-message {
                        position: ${this.constOptions.position};
                        width: ${this.constOptions.width};
                        opacity: .8;
                        padding: .75rem 1.25rem;
                        margin-bottom: 1rem;
                        border: 1px solid transparent;
                        border-radius: .25rem;
                    }
                    .update-message, .update-message > * {
                        box-sizing: border-box;
                    }
                    .update-message-dismissible {
                        padding-right: 4rem !important;
                    }
                    .update-success {
                        color: ${this.constOptions.successText};
                        background-color: ${this.constOptions.successBackground};
                        border-color: ${this.constOptions.successBorder};
                    }
                    .update-error {
                        color: ${this.constOptions.errorText};
                        background-color: ${this.constOptions.errorBackground};
                        border-color: ${this.constOptions.errorBorder};
                    }
                    .update-info {
                        color: ${this.constOptions.infoText};
                        background-color: ${this.constOptions.infoBackground};
                        border-color: ${this.constOptions.infoBorder};
                    }
                    .update-message.top {
                        top: 2rem;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .update-message.bottom {
                        bottom: 2rem;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .update-message.top-left {
                        top: 2rem;
                        left: 1rem;
                    }
                    .update-message.top-right {
                        top: 2rem;
                        right: 1rem;
                    }
                    .update-message.bottom-left {
                        bottom: 2rem;
                        left: 1rem;
                    }
                    .update-message.bottom-right {
                        bottom: 2rem;
                        right: 1rem;
                    }
                    .update-message.in-container {
                        position: relative !important;
                        top: auto !important;
                        bottom: auto !important;
                        left: auto !important;
                        right: auto !important;
                        width: 100% !important;
                        transform: none !important;
                    }
                    .fade {
                        transition: opacity .15s linear;
                    }
                    .fade:not(.show) {
                        opacity: 0;
                    }`;

        let containerCss = `.custom-message-container {
                                position: ${this.constOptions.position};
                                width: ${this.constOptions.width};
                                box-sizing: border-box;
                            }
                            .custom-message-container > * {
                                box-sizing: border-box;
                            }
                            .update-message::after, .update-message::before{
                                box-sizing: border-box;
                            }
                            .custom-message-container .update-message {
                                position: relative !important;
                                top: auto !important;
                                bottom: auto !important;
                                left: auto !important;
                                right: auto !important;
                                width: 100% !important;
                                transform: none !important;
                            }
                            .custom-message-container.top {
                                top: 2rem;
                                left: 50%;
                                transform: translateX(-50%);
                            }
                            .custom-message-container.top-left {
                                top: 2rem;
                                left: 1rem;
                            }
                            .custom-message-container.top-right {
                                top: 2rem;
                                right: 1rem;
                            }
                            .custom-message-container.bottom {
                                bottom: 2rem;
                                left: 50%;
                                transform: translateX(-50%);
                            }
                            .custom-message-container.bottom-left {
                                bottom: 2rem;
                                left: 1rem;
                            }
                            .custom-message-container.bottom-right {
                                bottom: 2rem;
                                right: 1rem;
                            }`;

        let closeBtnCss = `.close:not(:disabled):not(.disabled) {
                                cursor: pointer;
                            }
                            .update-message-dismissible .close {
                                position: absolute;
                                top: 0;
                                right: 0;
                                padding: .75rem 1.25rem;
                                color: inherit;
                            }
                            button.close {
                                padding: 0;
                                background-color: transparent;
                                border: 0;
                                -webkit-appearance: none;
                            }
                            [type=reset], [type=submit], button, html [type=button] {
                                -webkit-appearance: button;
                            }
                            .close {
                                float: right;
                                font-size: 1.5rem;
                                font-weight: 700;
                                line-height: 1;
                                color: #000;
                                text-shadow: 0 1px 0 #fff;
                                opacity: .5;
                            }
                            button, select {
                                text-transform: none;
                            }
                            button, input {
                                overflow: visible;
                            }`;

        elCss += closeBtnCss;
        if (this.constOptions.mode === 'stack') {
            elCss += containerCss;
        }

        return elCss;
    };

    //default options may be ovverridden by the user when thw message is called
    defaultOptions = {
        duration: 3000,
        dismissable: false,
        isSticky: false,
        placement: 'top'
    };
    //const options can be changed only before adding the service to Vue i.e. Vue.use(message, options)
    constOptions = {
        position: 'fixed',
        width: '20vw',
        mode: 'single',
        successText: '#155724',
        successBackground: '#d4edda',
        successBorder: '#c3e6cb',
        errorText: '#721c24',
        errorBackground: '#f8d7da',
        errorBorder: '#f5c6cb',
        infoText: '#0c5460',
        infoBackground: '#d1ecf1',
        infoBorder: '#bee5eb'
    };
}

export default new MessageService();
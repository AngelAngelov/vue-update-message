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
                        width: 100%;
                    }`;

        let containerCss = `.custom-message-container {
                                position: ${this.constOptions.position};
                                width: ${this.constOptions.width};
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

        if (this.constOptions.mode === 'stack') {
            elCss += containerCss;
        }

        return elCss;
    };

    //default options may be ovverridden by the user
    defaultOptions = {
        duration: 3000,
        dismissable: false,
        isSticky: false,
        placement: 'top'
    };
    //const options shoul never be changed by the user 
    constOptions = {
        position: 'fixed',
        width: '20vw',
        mode: 'stack'
    };
}

export default new MessageService();
class Message {
    constructor(props) {
        this.message = props.message;
        this.type = props.type;
        this.options = props.options;
        this.container = props.container;
        this.el = document.createElement('div');
        this.el.className = `alert alert-${this.type} alert-dismissible fade alert-item`;
        this.el.setAttribute('role', 'alert');
        const html = this.template();
        this.el.innerHTML = html;
    }
    mount() {
        if (this.options.placement === 'top') {
            this.container.insertBefore(this.el, this.container.firstChild);
        } else {
            this.container.appendChild(this.el);
        }

        //addclass show to trigger bootstrap show animation 
        this.el.className += ' show';

        if (!this.options.isSticky) {
            setTimeout((el) => {
                console.log(el);
                el.addEventListener("transitionend", function (e) {
                    e.target.remove();
                });

                //remove class show to trigger bootstrap hide animation
                el.className = el.className.replace(/\bshow\b/g, "");
                //currentNode.classList.remove('show'); //classList not working in IE11
            }, this.options.duration, this.el);
        }
    };

    template() {
        let dismissButton = '';

        if (this.options.dismissable) {
            dismissButton = this.dismissBtnTemplate;
        }

        return `${this.message} ${dismissButton}`
    };

    dismissBtnTemplate = `<button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>`;
}

export default Message;
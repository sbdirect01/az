function Modal() {
    this.submitEl = document.querySelector(".js-submit");
    this.inputName = document.querySelector(".js-input-name");
    this.inputPhone = document.querySelector(".js-input-phone");
    this.body = document.querySelector(".modal");
}

Modal.prototype.showModal = function (value) {
    $(this.body).css({'display': 'flex'}).animate({opacity: '1'}, 600);
    this.inputName.value = "";
    this.inputPhone.value = "";
    this.submitEl.innerHTML = value;
};

Modal.prototype.hideModal = function () {
    $(this.body).animate({opacity: '0'}, 600);
    const $this = this;
    setTimeout(
        function () {
            $($this.body).hide();
        }, 600);
};
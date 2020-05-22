function Form() {

    this.sendForm = function (form) {
        var name = form.elements["Lead[name]"],
            name_val = name.value,
            phone = form.elements["Lead[phone]"],
            phone_val = phone.value.replace(/[^0-9]/gim, ''),
            reg_phone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            submit_id = form.elements["Lead[my_submit]"].value,
            submit = document.getElementById(submit_id),
            oldSubmitValue = submit.innerHTML,
            name_val_lenght = name_val.length;

        phone_val = phone_val.replace(/^(8|7)/g, '');
        phone.value = phone_val;

        if (!name_val || name_val_lenght < 2) {
            this.error($(submit), name, oldSubmitValue);
            return false;

        } else if (!phone_val.match(reg_phone) || phone_val.length != 10) {
            this.error($(submit), phone, oldSubmitValue);
            return false;
        }

        form.submit();
    };

    this.error = function (submit, input, oldSubmitValue) {
        var demoTimeout;
        submit.html("<span>" + input.getAttribute('placeholder') + "</span>").jrumble({x: 4, y: 0, rotation: 0, speed: 0});
        input.focus();
        clearTimeout(demoTimeout);
        submit.trigger('startRumble');
        demoTimeout = setTimeout(function () {
            submit.trigger('stopRumble');
        }, 800);
        $("input").on('click', function () {
            submit.html(oldSubmitValue);
        });
        setTimeout(
            function () {
                submit.html(oldSubmitValue);
            },
            4000
        )
    }
}
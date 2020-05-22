function TimeCounter() {

    this.days_span = document.getElementById("days");
    this.hours_span = document.getElementById("hours");
    this.minutes_span = document.getElementById("minutes");
    this.seconds_span = document.getElementById("seconds");

    this.timer = function () {
        var $this = this;
        setTimeout(function () {
            var date1 = new Date(),
                date2 = new Date(),
                diff,
                days,
                hours,
                minutes,
                seconds;

            date2.setDate(date1.getDate() + 3);
            date2.setHours(0, 0, 0, 0);

            diff = (date2 - date1) / 1000;

            days = diff / (3600 * 24);
            hours = (diff % (3600 * 24)) / 3600;
            minutes = (diff - (Math.floor(diff / 3600)) * 3600) / 60;
            seconds = diff % 60;

            $this.innerDate(days, hours, minutes, seconds);
            $this.timer()
        }, 1000);
    };

    this.innerDate = function (days, hours, minutes, seconds) {

        this.days_span.innerText = days < 10 ? "0" + Math.floor(days) : Math.floor(days);
        this.hours_span.innerText = hours < 10 ? "0" + Math.floor(hours) : Math.floor(hours);
        this.minutes_span.innerText = minutes < 10 ? "0" +  Math.floor(minutes) : Math.floor(minutes);
        this.seconds_span.innerText = seconds < 10 ? "0" + Math.floor(seconds) : Math.floor(seconds);
    };

}

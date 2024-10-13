        let hr = document.querySelector('#hr');
        let mn = document.querySelector('#mn');
        let sc = document.querySelector('#sc');

        setInterval(() => {
            let date = new Date();
            let hh = date.getHours() * 30;
            let mm = date.getMinutes() * 6;
            let ss = date.getSeconds() * 6;

            hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            // digital clock
            let hour = document.getElementById('hour');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');

            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            let am = h >= 12 ? 'PM' : 'AM';

            h = h % 12;
            h = h ? h : 12; // if hour is 0, change it to 12

            hour.innerHTML = h < 10 ? '0' + h : h;
            minutes.innerHTML = m < 10 ? '0' + m : m;
            seconds.innerHTML = s < 10 ? '0' + s : s;
            ampm.innerHTML = am;

        }, 1000);
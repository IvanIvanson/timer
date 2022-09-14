 const btnStart = document.querySelector("#start");
        const btnStop = document.querySelector("#stop");
        let a = 1;
        let timer;
        let b = document.getElementById("bd")
        let p = document.getElementById("timer");


        function myTimer() {
            p.classList.add("blink")
            p.innerHTML = `${a} s`;
            let min = Math.floor(a / 60)
            a++;
            if (a >= 60) {
                p.innerHTML = `${min}min:${a - (min * 60)}s`;
                p.style.fontSize = 20 + 'px';
            }
            timer = setTimeout(myTimer, 1000);

            btnStop.addEventListener("click", function () {
                clearTimeout(timer);
                p.classList.remove("blink")
            })
        }

        // --------

        btnStart.addEventListener("click", myTimer);

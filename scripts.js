var countDownDate = new Date("April 20, 2021, 16:20:00").getTime();
            var x = setInterval(function(){
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("timer").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
            }, 1000);

var tcountDownDate = new Date("April 20, 2021, 16:20:00").getTime();
            var tx = setInterval(function(){
                var tnow = new Date().getTime();
                var tdistance = tcountDownDate - tnow;
                var tdays = Math.floor(tdistance / (1000 * 60 * 60 * 24));
                var thours = Math.floor((tdistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var tminutes = Math.floor((tdistance % (1000 * 60 * 60)) / (1000 * 60));
                var tseconds = Math.floor((tdistance % (1000 * 60)) / 1000);

                document.getElementById("ttimer").innerHTML = tdays + ":" + thours + ":" + tminutes + ":" + tseconds;
            }, 1000);
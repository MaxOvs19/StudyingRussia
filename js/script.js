
document.addEventListener('DOMContentLoaded', function() {
       
        // Задаём конечную дату (Дедлайн)
        let deadline = '2021-10-29';
    
        // Сколько осталось времени
        function getTimeRemaining(endtime) {
            // Получаем разницу. Переводим конечную дату в миллисекунды и отнимаем текущую дату
            let Alltime = Date.parse(endtime) - Date.now(),

            // Высчитываем секунды, минуты, часы и дни
            minutes = Math.floor((Alltime/1000/60) % 60),
            hours = Math.floor((Alltime/1000/60/60) % 24),
            days = Math.floor((Alltime/1000/60/60/24));
            //
            return {
                'total': Alltime,
                'minutes': minutes,
                'hours': hours,
                'days': days
            };
        }
    
        // Форматируем и устанавливаем значения в разметку
        function setClock(id, endtime) {
            // Получаем блок таймера по его id
            let timer = document.getElementById(id),

                // И соотвественно, все элементы блока
                days = timer.querySelector('.days'),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                
                // Обновляем таймер каждую секунду
                timeInterval = setInterval(updateClock, 1000);
    
                // Функция для обновления таймера
                function updateClock() {
                    // Помещаем в Alltime результат функции getTimeRemaining (объект)
                    let Alltime = getTimeRemaining(endtime);
                    // Если дней осталось 0 - не выводим
                    if (Alltime.days <= 0) {
                        days.textContent = "";
                        
                    } else {
                        days.textContent = Alltime.days;
                    // Вставляем слово "день" при этом форматируя (дней, дня)
                                           
                    }
                    // Вставляем оставшееся время
                    hours.textContent = formatTime(Alltime.hours);
                    minutes.textContent = formatTime(Alltime.minutes);
                        
                    // Если Дедлайн прошёл - вставляем в таймер 00:00:00,
                    // и останавливаем отсчёт (clearInterval)
                    if (Alltime.total <= 0) {
                        clearInterval(timeInterval);
                        days.textContent = "";
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        
                    }
                }
    
                // Функция добавляет 0 к единцам, получаем
                // 03:04:05 вместо 3:4:5
                function formatTime(time){
                    if ( time < 10) {
                        time = '0' + time;
                    }
                    return time;
                }
        }
        //Вызов таймера. Передаём id элемента и наш Дедлайн
        setClock('timer', deadline);
});

// Обработчик кликов регистрации
const btnRegistr = document.getElementById("btnRegistr");
let clicks = 0;

btnRegistr.addEventListener("click", function(){
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
})


//Обработчик кликов Like
const btnLike = document.querySelectorAll(".like");

let like1 = 0;
let like2 = 0;
let like3 = 0;

for (let btnNamber of btnLike) {
    btnNamber.addEventListener("click", function (){
        if (btnNamber === document.querySelector(".icon-like1")) {
            like1 += 1;
            document.querySelector(".count-like1").innerHTML = like1;
        }
        if (btnNamber === document.querySelector(".icon-like2")) {
            like2 += 1;
            document.querySelector(".count-like2").innerHTML = like2;
        }
        if (btnNamber === document.querySelector(".icon-like3")) {
            like3 += 1;
            document.querySelector(".count-like3").innerHTML = like3;
        }

    });
}

// переключение дней и событий запланированных на заданные числа
// обработчик событий
const btnItem = document.querySelectorAll(".data-table");
const blockTextCollection = document.querySelectorAll(".blockText");

// Цикл перебирает весь масив классов
for(let btnNamber of btnItem){
    // при клике идет поиск кнопки
    btnNamber.addEventListener("click", function(){        
        if (btnNamber == document.querySelector(".data1")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.toggle("blockText-none");
        }
        
        if (btnNamber == document.querySelector(".data2")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.toggle("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data3")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.toggle("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data4")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.toggle("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data5")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.toggle("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data6")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.toggle("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data7")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.toggle("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data8")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.toggle("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data9")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.toggle("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data10")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.toggle("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data11")) {
            document.querySelector(".elem12").classList.add("blockText-none");
            document.querySelector(".elem11").classList.toggle("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
        if (btnNamber == document.querySelector(".data12")) {
            document.querySelector(".elem12").classList.toggle("blockText-none");
            document.querySelector(".elem11").classList.add("blockText-none");
            document.querySelector(".elem10").classList.add("blockText-none");
            document.querySelector(".elem9").classList.add("blockText-none");
            document.querySelector(".elem8").classList.add("blockText-none");
            document.querySelector(".elem7").classList.add("blockText-none");
            document.querySelector(".elem6").classList.add("blockText-none");
            document.querySelector(".elem5").classList.add("blockText-none");
            document.querySelector(".elem4").classList.add("blockText-none");
            document.querySelector(".elem3").classList.add("blockText-none");
            document.querySelector(".elem2").classList.add("blockText-none");
            document.querySelector(".elem1").classList.add("blockText-none");
        }
    });
}

// Slider 
let offset = 0;
const slider = document.querySelector(".slider-line");
const backBtn = document.querySelector(".arrow-back");
const nextBtn = document.querySelector(".arrow-next");

nextBtn.addEventListener("click", function(){
    offset += 1170;
    if (offset > 3414) {
        offset = 0;
    }
    slider.style.left = -offset + "px";
});

backBtn.addEventListener("click", function(){
    offset = offset - 1170;
    if (offset < 0) {
        offset = 2340;
    }
    slider.style.left = -offset + "px";
});



//Popap 
const linksPopap = document.querySelectorAll(".linkPopap");
let unlock = true;

if (linksPopap.length > 0) {
    for (let index = 0; index < linksPopap.length; index++) {
        const popapLink = linksPopap[index];
        
        popapLink.addEventListener("click", function(event){
            const popapName = popapLink.getAttribute('href').replace('#','');
            const curentPopap = document.getElementById(popapName);
            
            
            popapOpen(curentPopap);
            event.preventDefault();
        });
        
    }
}
const popapCloseIcon = document.querySelectorAll(".close-popap");
if (popapCloseIcon.length > 0) {
    for (let index = 0; index < popapCloseIcon.length; index++) {
        const elem = popapCloseIcon[index];
        
        elem.addEventListener("click", function(event){
            popapClose(elem.closest(".popap"));
            event.preventDefault();
        });
    }
}
function popapOpen(curentPopap) {
    if (curentPopap && unlock) {
        const popapActive = document.querySelector(".popap.open");
        
        if (popapActive) {
            popapClose(popapActive, false);
            
        }
        curentPopap.classList.add("open");
    }
    
}
function popapClose(popapActive, doUnlock = true) {
    if (unlock) {
        popapActive.classList.remove('open');
    }
}

// Burger menu JS

const burgerBtn = document.querySelector(".burger-menu_button");
const burgerItem = document.querySelector(".burger-navigation");

burgerBtn.addEventListener('click', function(){
    
    burgerItem.classList.toggle("burger-menu_active");  
    burgerBtn.classList.toggle("burger-menu_activeBtn");
});



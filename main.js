const onoff = document.querySelector("#onoff");

const toggle = () => {

    const planosAnnually = document.querySelectorAll(".plano-annually");
    const planosMonthly = document.querySelectorAll(".plano-monthly")

    planosAnnually.forEach(planoAnnually => {
        planoAnnually.classList.toggle('mostrar');
    });

    planosMonthly.forEach(planoMonthly => {
        planoMonthly.classList.toggle('esconder');
    });

};

    let actualizar = function(){
        const fecha = new Date();
        const diaF = fecha.getDate();
        const mesF = fecha.getMonth();
        const anioF = fecha.getFullYear();
        const horaF = fecha.getHours();
        const minutoF = fecha.getMinutes();
        const segundoF = fecha.getSeconds();

        const dia = document.getElementById('dia');
        const mes = document.getElementById('mes');
        const anio = document.getElementById('anio');
        const hora = document.getElementById('hora');
        const minuto = document.getElementById('minuto');
        const segundo = document.getElementById('segundo');
        
        dia.textContent = diaF;
        mes.textContent = mesF;
        anio.textContent = anioF;
        hora.textContent = horaF;
        minuto.textContent = minutoF;
        segundo.textContent = segundoF;
    }
    actualizar();
    const setActualizar = setInterval(actualizar,1000)

let trad = false;

function traducir() {
    const tit= document.getElementById("tit")
    const Welcome = document.getElementById("Welcome");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    
    if (!trad) {
        tit.innerHTML = "OVNI ENCONTRADO!!! 100% REAL!!!";
        Welcome.innerHTML = "LA GRAN ABDUCCION ESTA ENTRE NOSOTROS!!!";
        p1.innerHTML = "La foto salió granulada, en <b>blanco y negro</b>, con esa sospechosa vibra de <i>evidencia vintage</i>… y ahí está: un <b>OVNI flotando casualmente sobre la ciudad como si estuviera buscando estacionamiento.</b> Los gobiernos dijeron <i>fenómeno atmosférico.</i> Los expertos dijeron <i>probablemente un dron.</i> Internet dijo <i>este es el momento.</i> Pero mira de cerca — <b>no está atacando.</b> No hay rayos láser. No hay discurso dramático de invasión. Solo está… <b>flotando.</b> Observando. Honestamente, creo que llegaron, revisaron las noticias mundiales durante cinco minutos, vieron el tráfico, los correos, el caos… y decidieron que la Tierra ya estaba gestionando su propio apocalipsis bastante bien. Dejaron la foto atrás. Y probablemente archivaron un reporte que decía: <i>Especie interesante. Mucho drama. Poca supervisión necesaria.</i>";
        p2.innerHTML = "Pero ¿tú qué piensas? ¿Solo nos están vigilando o están listos para el gran ataque??? Por favor dinos… y mantente a salvo…";
        trad = true;
    }
    
    else {
        tit.innerHTML = "UFO FOUND!!! 100% REAL!!!"
        Welcome.innerHTML = "THE BIG ABDUCTION IS AMONG US!!!";
        p1.innerHTML = "The photo came out grainy, in <b>black and white</b>, with that suspicious <i>vintage evidence</i> vibe… and there it is: a <b>UFO casually hovering over the city like it’s trying to find parking.</b> Governments said <i>atmospheric phenomenon.</i> Experts said <i>probably a drone.</i> The internet said <i>this is it.</i> But look closely — <b>it’s not attacking.</b> No laser beams. No dramatic invasion speech. It’s just… <b>hovering.</b> Observing. Honestly, I think they showed up, checked global news for five minutes, saw the traffic, the emails, the chaos… and decided Earth was already managing its own apocalypse just fine. They left the photo behind. And probably filed a report that said: <i>Interesting species. High drama. Low supervision required.</i>";
        p2.innerHTML = "But what do you think? Are they just watching us or are they ready for the big attack??? Please let us know… and stay safe…";
        trad = false;

    }
}



function background() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");

}
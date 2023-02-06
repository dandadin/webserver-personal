function addVzornik() {
    const vzornik = document.getElementById('vzornik');
    vzornik.style.display = "flex";
    vzornik.style.flexDirection = "row";
    vzornik.style.gap = "20px";
    for (var i of Record._units) {
        var div = document.createElement("div");
        var canvas = document.createElement("canvas");
        canvas.style.height = "25px";
        canvas.style.width = "50px";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        div.style.flexDirection = "column";
        addChart(canvas, [1], [i[3]]);
        div.appendChild(canvas);
        div.appendChild(document.createTextNode(i[1]));
        vzornik.appendChild(div);
    }
}

addVzornik();
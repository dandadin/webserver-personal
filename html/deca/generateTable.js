function tableCreate() {
    const body = document.body,
        tbl = document.createElement('table');
    tbl.style.width = '100px';
    tbl.style.border = '1px solid black';

    database = new DecaDatabase();

    years = database.allYear();
    months = database.allMonth();
    names = database.allName();
    years.sort();
    var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    months.sort(collator.compare);

    console.log(names.length);
    for (let i = 0; i <= names.length; i++) {
        const tr = tbl.insertRow();
        for (let j = 0; j <= years.length*months.length; j++) {
            const td = tr.insertCell();
            var insides;
            var year = years[((j-1)-((j-1)%months.length))/months.length];
            var month = months[(j-1)%months.length];

            if (i === 0 && j === 0 ) insides = "";
            else if (i === 0) insides = year + "/" + month;
            else if (j === 0) insides = names[i-1];
            else insides = ".";

            //if (i > 2 && i < 20 && j > 90 && j < 100) {
            if (i >= 1 && j >= 1) {
                // TODO: console.log(year, month);
                var canvas = document.createElement("canvas");
                canvas.style.height = "15px";
                canvas.style.width = "30px";
                let tmp = database.graph(year, month, names[i-1]);
                // TODO: console.log(tmp);
                if (tmp[0].length > 0) {
                    td.appendChild(canvas);
                    addChart(canvas, tmp[0], tmp[1]);
                } else {
                    td.style.textAlign = "center";
                    var node = document.createElement("span");
                    node.innerText = insides;
                    td.appendChild(node);
                }
                // TODO: console.log(tmp[0], tmp[1]);
            } else {
                td.style.textAlign = "center";
                var node = document.createElement("span");
                node.innerText = insides;
                td.appendChild(node);
                if (i === 0) {
                    td.style.writingMode = "vertical-rl";
                    td.style.textOrientation = "mixed";
                }
                if (j === 0) {
                    td.style.whiteSpace = "nowrap";
                }
            }
        }
    }
    body.appendChild(tbl);
}

function addChart(canvas, data, bC) {
    new Chart(canvas, {
        type: 'pie',
        data: {
            datasets: [{
                data: data,
                backgroundColor: bC,
                hoverOffset: 4,
                borderWidth: 0.1
            }]
        },
        options: {
            responsive: false
        }
    });
}

tableCreate();
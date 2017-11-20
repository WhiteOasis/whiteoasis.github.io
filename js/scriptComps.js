var arrayJson = [
    {
        "title": "Composicion 1",
        "Per1": "sion",
        "Per2": "maestroyi",
        "Per3": "taliyah",
        "Per4": "tristana",
        "Per5": "taric",
    },
    {
        "title": "Composicion 2",
        "Per1": "maokai",
        "Per2": "shaco",
        "Per3": "zed",
        "Per4": "kalista",
        "Per5": "thresh",
    }
];

// JavaScript source code
// var xmlhttp = new XMLHttpRequest();
// var url = "data/data.json";
//
// xmlhttp.onreadystatechange = function () {
//
//     //alert(this.responseText + ' ' +this.readyState+ ' ' +this.status);
//     if (this.readyState == 3 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         alert(myArr);
//         //alert("myArr");
//         createComps(myArr);
//     }
// };
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

function createComps(array){
  var container = document.getElementById('container');

  for (var i = 0; i < array.length; i++) {
    var div = document.createElement("div");
    div.setAttribute('class', 'comp');

    var title = document.createElement("p");
    var titletext = document.createTextNode(array[i].title);

    var pers1 = document.createElement("div");
    pers1.setAttribute('class', array[i].Per1);
    var pers1P = document.createElement("p");
    var pers1Text = document.createTextNode(array[i].Per1);





    container.appendChild(div);

    div.appendChild(title);
    title.appendChild(titletext);

    div.appendChild(pers1);
    pers1.appendChild(pers1P);
    pers1P.appendChild(pers1Text);

  }
}

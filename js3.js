var versek = [
    {
        cim: "Csordul a kadarka",
        szerzo: "Nagy Vendel",
        vers: "Csordul a kadarka,<br>szálljon az ének,<br>mindenki azt kapja,<br>amit kiérdemlett.<br><br>Folyik a tüzes bor,<br>leöblíti a port,<br>hordó abrincsával<br>szorítja a kort.<br><br>Csorduljon a bor,<br>és szálljon a dal,<br>aztán legyen az,<br>amit ő akar.<br><br>Öreg fák közt zsolozsmázó<br>rongyruhájú remete<br>csurgó hideg vizén él<br>barlangok bölcseletén.<br><br>Nos hát valakinek<br>el kell hintenie<br>az igazság felének a felét,<br>sokszor már az is elég.<br><br>Derekán a kötél<br>hármas csomójával,<br>elűzi a rossz bajt,<br>mindig kordában tart.<br><br>Csorog a hegy vére<br>bíborszín lopóból,<br>bölcsességet áraszt<br>mindenkor az óbor.",
        kep: "kepek/Szekszárdi-Kadarka.jpg"
    },
    {
        cim: "Álmatlanul",
        szerzo: "Gáll Júlia",
        vers: "Hajnali három megszökött álmom nincs elég bárány <br>kifogyott a karám a hold sem segít éppen takarít <br> csillagokat feszít sötét eget díszít világosodik <br>eszem elmélkedik nincs bárány sem csillag már álmom <br>sincs semmi ennek így kell lenni.",
        kep: "kepek/humor-public-speaking.jpg"
    }
];
var szamolo1 = 0;
var szamolo2 = 0;
$(function () {

    if ($(".elem1").on("click", esemeny1)) {


    }
    $(".elem2").on("click", esemeny2);
});
function esemeny1() {
    szamolo2 = 0;
    szamolo1++;
//    console.log(szamolo1+"szamolo");
    if (szamolo1 % 2 === 1) {
        $(".versMegjelenites").html("<div><h3>" + versek[0].cim + "</h3><p>" + versek[0].vers + "</p><p>" + versek[0].szerzo + "</p></div>");
        $(".cim").html("<h2>"+versek[0].szerzo+"</h2>");
    } else {
        $(".versMegjelenites").html("");
        $(".cim").html("<h2>"+"3.Oldal"+"</h2>");
    }

    /* <img src='" +versek[0].kep+"' alt='kadarka'></img> */
}
function esemeny2() {
    szamolo1 = 0;
    szamolo2++;
//    console.log(szamolo2+"szamolo");
    if (szamolo2 % 2 === 1) {
        $(".versMegjelenites").html("<div><h3>" + versek[1].cim + "</h3> <p>" + versek[1].vers + "</p><p>" + versek[1].szerzo + "</p></div>");
        $(".cim").html("<h2>"+versek[1].szerzo+"</h2>");
    } else {
        $(".versMegjelenites").html("");
        $(".cim").html("<h2>"+"3.Oldal"+"</h2>");
    }
    /*  <img src='" +versek[1].kep+"' alt='humor'></img> */
}
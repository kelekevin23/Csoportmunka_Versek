
var versTomb4 = [
    {
        cim: "Őszike",
        szerzo: "Kövecses Anna",
        vers: "<br>Csendes az ősz.<br>Bronzszínt érlel.<br>Vén gally játszik<br>Nyirkos fénnyel.<br><br>",
        kep: "kepek/oszike.png"
    },
    {
        cim: "József Attila",
        szerzo: "Tedd a kezed",
        vers: "Tedd a kezed<br>homlokomra,<br>mintha kezed<br>kezem volna.<br><br>Úgy őrizz, mint<br>ki gyilkolna,<br>mintha éltem<br>élted volna.<br><br>Úgy szeress, mint<br>ha jó volna,<br>mintha szívem<br>szíved volna.<br><br>",
        kep: "kepek/JA.jpg"
    }
];

$(function(){

    for (let i = 0; i < versTomb4.length; i++) {
        const element = versTomb4[i];  
        $("#tores div").eq(i*2).append("<img src='"+element.kep+"' alt='kep'>");
        
    }
  
    $("#tores div").eq(0).on("mouseover", esemeny1);
    $("#tores div").eq(0).on("mouseleave", esemeny3);
    $("#tores div").eq(2).on("mouseover", esemeny2);
    $("#tores div").eq(2).on("mouseleave", esemeny4);
  });

  function esemeny1(){
    $("#tores div").eq(1).html("<h3>"+versTomb4[0].cim+"</h3><p>"+versTomb4[0].vers+versTomb4[0].szerzo+"</p>");
  }

  function esemeny2(){
    $("#tores div").eq(3).html("<h3>"+versTomb4[1].cim+"</h3><p>"+versTomb4[1].vers+versTomb4[1].szerzo+"</p>");
  }

  function esemeny3(){
    $("#tores div").eq(1).html("");
  }

  function esemeny4(){
    $("#tores div").eq(3).html("");
  }
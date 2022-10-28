function student() {
    var point_1 = document.getElementById("txt-point-1").value;
    var point_2 = document.getElementById("txt-point-2").value;
    var point_3 = document.getElementById("txt-point-3").value;
    var dataArea = document.getElementById("area").value;
    var mart = document.getElementById("txt-mart").value;
    var supject = document.getElementById("supject").value;
    var tong=0;
    supject = parseFloat(supject);
    area = parseFloat(dataArea) ;
    point_1 = parseFloat(point_1);
    point_2 = parseFloat(point_2);
    point_3 = parseFloat(point_3);
    mart = parseFloat(mart);
    tong = (point_1+point_2+point_3) + area + supject;
    if(point_1===0||point_2===0||point_3===0){
        document.getElementById('resul').innerHTML = "Bạn đã rớt: có điểm nhỏ hơn 0: ";
    }
    else if(tong<mart){
        document.getElementById('resul').innerHTML = "Bạn đã rớt: tổng điểm: "+ tong;
        document.getElementById("resul").style.color = "red";
    }
    else if(tong>=mart){
        document.getElementById('resul').innerHTML = "Bạn đã đậu: tổng điểm: "+ tong;
    }
    else{
        document.getElementById('resul').innerHTML = "xin nhập lại";
    }
}
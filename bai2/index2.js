function bill() {
    var name = document.getElementById("txt-name").value;
    var kw = document.getElementById("txt-kw").value;
    var money = 0;
    kw = parseFloat(kw);

    if (kw > 0) {
        document.getElementById("result").style.color = "blue";
        if (kw <= 50) {
            money = kw * 500;
        }
        else if (kw > 50 && kw <= 100) {
            money = (50 * 500) + ((kw - 50) * 650);
        }
        else if (kw > 100 && kw <= 200) {
            money = (50 * 500) + (50 * 650) + ((kw - 100) * 850);
        }
        else if (kw > 200 && kw <= 350) {
            money = (50 * 500) + (50 * 650) + (100 * 850) + ((kw - 200) * 1100);
        }
        else {
            money = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + ((kw - 350) * 1300);
        }
        document.getElementById("result").innerHTML = "Họ tên: " + name + ": " + "Tiền điện: " + money.toLocaleString('vi-VN') + " VNĐ";
    }
    else {
        document.getElementById("result").innerHTML = "xin nhập lại";
        document.getElementById("result").style.color = "red";
    }
}
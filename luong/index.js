// tính lương
function accept(){
    var ngay = document.getElementById('ngay').value;
    // tong luong
    var soluong = 100000;
    var tongluong = 0;
    tongluong = soluong * ngay ;
    document.getElementById('tongluong').innerHTML = tongluong.toLocaleString();
}

// tính giá trị trung bình 5 số
function result(){
    var TB = document.getElementById('TB').value;
    var number1 = document.getElementById('number1').value*1;
    var number2 = document.getElementById('number2').value*1;
    var number3 = document.getElementById('number3').value*1;
    var number4 = document.getElementById('number4').value*1;
    var number5 = document.getElementById('number5').value*1;
    var trungbinh = 0 ;
    trungbinh = (number1 + number2 + number3 + number4 + number5) / 5 ;
    document.getElementById('trungbinh').innerText = trungbinh ; 
}
// quy đổi tiền
function check(){
    var usdValue = document.getElementById("usd").value;
    var giaUsd = 23500;
    var quyDoi = 0 ;
    quyDoi = giaUsd * usdValue ;
    document.getElementById('quy-doi').innerHTML = `Thành Tiền : ${quyDoi.toLocaleString()} VND`;
}
// Tính diện tích,chu vi HCN
function count(){
    var daiRong = document.getElementById('dai-rong').value;
    var chieuDai = document.getElementById('chieu-dai').value*1;
    var chieuRong = document.getElementById('chieu-rong').value*1;
    var dienTich = 0;
    var chuVi = 0;
    dienTich = chieuDai * chieuRong ;
    chuVi = (chieuDai + chieuRong) * 2 ;
    document.getElementById('dien-tich').innerHTML = `Diện tích : ${dienTich}`;
    document.getElementById('chu-vi').innerHTML = `Chu vi : ${chuVi}`;
    
}
// Tính tổng 2 ký số
function end(){
    var tong2Kyso = document.getElementById('tong-2Kyso').value;
    var tong = 0;
    var hangChuc = 0;
    var hangDonvi = 0 ;
    hangChuc = Math.floor(tong2Kyso / 10)  ;
    console.log("🚴‍♀️ - end - hangChuc:", hangChuc);
    hangDonvi = tong2Kyso % 10 ;
     console.log("🚴‍♀️ - end - hangDonvi:", hangDonvi);
    tong = hangChuc + hangDonvi ;
     document.getElementById('tong2Kyso').innerText = `Tổng : ${tong}`;
}

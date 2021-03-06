class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTen, CMND, ngayMoSo, soTenGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTen = hoTen;
        this.CMND = CMND;
        this.ngayMoSo = ngayMoSo;
        this.soTenGui = soTenGui;
    }

    getMaSo() {
        return this.maSo;
    }

    setMaSo(value) {
        this.maSo = value;
    }

    getLoaiTietKiem() {
        return this.loaiTietKiem;
    }

    setLoaiTietKiem(value) {
        this.loaiTietKiem = value;
    }

    getHoTen() {
        return this.hoTen;
    }

    setHoTen(value) {
        this.hoTen = value;
    }

    getCMND() {
        return this.CMND;
    }

    setCMND(value) {
        this.CMND = value;
    }

    getNgayMoSo() {
        return this.ngayMoSo;
    }

    setNgayMoSo(value) {
        this.ngayMoSo = value;
    }

    getSoTenGui() {
        return this.soTenGui;
    }

    setSoTenGui(value) {
        this.soTenGui = value;
    }

    getSoTienGui() {
        return this.soTienGui;
    }

    setSoTienGui(value) {
        this.soTienGui = value;
    }
}

function mainEx3() {
    let chon;
    do {
        chon = menu();
        switch (chon) {
            case "1":
                themSoTietKiem();
                break;
            case "2":
                xoaSoTietKiem();
                break;
            case "3":
                hienThiDanhSachSo();
                break;
            default:
                return;
        }
    } while (chon >= 1 && chon <= 3);
}

let danhSachSo = [];

// function taoInput(tenInput, tenLabel) {
//     let label = document.createElement("label");
//     label.htmlFor = tenInput;
//     label.innerHTML = tenLabel;
//
//     let input = document.createElement("input");
//     input.type = "text";
//     input.id = tenInput;
//
//     let div = document.createElement("div");
//     div.appendChild(label);
//     div.appendChild(input);
//
//     return div;
// }

function themSoTietKiem() {
    // let maSoDiv = taoInput("maSo"+danhSachSo.length, "M?? s???");
    // let loaiTietKiemDiv = taoInput("loaiTietKiem"+danhSachSo.length, "Lo???i ti???t ki???m");
    // let hoTenDiv = taoInput("hoTen"+danhSachSo.length, "H??? t??n");
    // let CMNDDiv = taoInput("CMND"+danhSachSo.length, "CMND");
    // let ngayMoSoDiv = taoInput("ngayMoSo"+danhSachSo.length, "Ng??y m??? s???");
    // let soTienGuiDiv = taoInput("soTienGui"+danhSachSo.length, "S??? ti???n g???i");
    // let nutOK = document.createElement("button");
    // nutOK.innerHTML = "Th??m";
    // nutOK.onclick = function () {
    //     let maSo = document.getElementById("maSo" + danhSachSo.length).value;
    //     let loaiTietKiem = document.getElementById("loaiTietKiem" + danhSachSo.length).value;
    //     let hoTen = document.getElementById("hoTen" + danhSachSo.length).value;
    //     let CMND = document.getElementById("CMND" + danhSachSo.length).value;
    //     let ngayMoSo = document.getElementById("ngayMoSo" + danhSachSo.length).value;
    //     let soTienGui = document.getElementById("soTienGui" + danhSachSo.length).value;
    //
    //     let soMoi = new SoTietKiem(maSo, loaiTietKiem, hoTen, CMND, ngayMoSo, soTienGui);
    //
    //     danhSachSo.push(soMoi);
    //     alert("Add Successfully");
    //
    // }
    // document.body.append(maSoDi, loaiTietKiemDiv, hoTenDiv, CMNDDiv, ngayMoSoDiv, soTienGuiDiv, nutOK);

    let kiemTra = new Validation();

    let maSo;
    do {
        maSo = prompt("Nh???p v??o m?? s???");

        if (!kiemTra.kiemTraMaSo(maSo))
            alert("M?? s??? ???? t???n t???i");

        if (!kiemTra.gioiHanKiTu(1, 5, maSo))
            alert("M?? s??? t???i ??a 5 k?? t???");
    } while (!kiemTra.kiemTraMaSo(maSo) && !kiemTra.gioiHanKiTu(1, 5, maSo));

    let loaiTietKiem;
    do {
        loaiTietKiem = prompt("Nh???p v??o lo???i ti???t ki???m");

        if (!kiemTra.gioiHanKiTu(1, 10, loaiTietKiem))
            alert("Lo???i ti???t ki???m t???i ??a 5 k?? t???");
    } while (!kiemTra.gioiHanKiTu(1, 10, loaiTietKiem));

    let hoTen;
    do {
        hoTen = prompt("Nh???p v??o h??? t??n");

        if (!kiemTra.gioiHanKiTu(1, 30, hoTen))
            alert("H??? t??n t???i ??a 5 k?? t???");
    } while (!kiemTra.gioiHanKiTu(1, 30, hoTen));

    let CMND;
    do {
        CMND = prompt("Nh???p v??o s??? CMND");

        if (!kiemTra.kiemTraCMND(CMND))
            alert("Ch???ng minh nh??n d??n ph???i ????? 9 s???");
    } while (!kiemTra.kiemTraCMND(CMND));

    let ngayMoSo;
    do {
        ngayMoSo = prompt("Nh???p v??o ng??y m??? s???");

        if (!kiemTra.kiemTraNgay(ngayMoSo))
            alert("Ng??y nh???p v??o d?????i ?????nh d???ng dd/mm/yyyy");
    } while (!kiemTra.kiemTraNgay(ngayMoSo));

    let soTienGui;
    do {
        soTienGui = prompt("Nh???p v??o s??? ti???n g???i");

        if (!kiemTra.kiemTraTienGui(soTienGui)) {
            alert("S??? ti???n g???i ph???i l???n h??n 0");
        }
    } while (!kiemTra.kiemTraTienGui(soTienGui));

    let soMoi = new SoTietKiem(maSo, loaiTietKiem, hoTen, CMND, ngayMoSo, soTienGui);
    danhSachSo.push(soMoi);
    alert("Th??m th??nh c??ng");
}

function xoaSoTietKiem() {
    if (danhSachSo.length === 0) {
        alert("Hi???n ch??a c?? s??? n??o");
    } else {
        let maSo = prompt("Nh???p v??o m?? s??? c???n x??a");

        //Ki???m tra c?? nh???p ????ng d???ng m?? s??? ch??a, n???u ch??a th?? cho nh???p l???i
        if (!new Validation().gioiHanKiTu(1, 5, maSo)) {
            alert("M?? s??? t???i ??a 5 k?? t??");

            xoaSoTietKiem();
        } else if (new Validation().kiemTraMaSo(maSo)) {
            alert("M?? s??? " + maSo + " kh??ng t???n t???i!");
        } else {
            for (const so of danhSachSo) {
                if (so.getMaSo() === maSo) {
                    if (confirm("B???n c?? ch???c ch???n mu???n x??a!")) {
                        danhSachSo.splice(danhSachSo.indexOf(so), 1);

                        alert("X??a th??nh c??ng");
                    }
                }
            }
        }
    }
}

function hienThiDanhSachSo() {
    if (danhSachSo.length === 0) {
        alert("Hi???n ch??a c?? s??? n??o");
    } else {
        let danhSach = "";
        let i = 1;
        for (const so of danhSachSo) {
            danhSach += i++ + ". " + "M?? s???: " + so.getMaSo() + " - Kh??ch h??ng: " + so.getHoTen() + "\n";
        }

        alert(danhSach);
    }
}

function menu() {
    let menu = "1. Th??m s??? ti???t ki???m\n" +
        "2. X??a s??? ti???t ki???m\n" +
        "3. Hi???n th??? danh s??ch s???\n" +
        "0. Tho??t.\n" +
        "L???a ch???n\n"
    return prompt(menu);
}

//Ki???m tra ?????u v??o
class Validation {
    kiemTraMaSo(maSo) {
        for (const so of danhSachSo) {
            if (so.getMaSo() === maSo)
                return false;
        }

        //Khong ton tai
        return true;
    }

    gioiHanKiTu(a, b, chuoi) {
        return chuoi.length >= a && chuoi.length <= b;
    }

    kiemTraTienGui(tien) {
        return tien > 0;
    }

    kiemTraCMND(ma) {
        //Regex for ID (9 numbers)
        const CMND = /(\d){9}/;
        return CMND.test(ma);
    }

    kiemTraNgay(ngay) {
        let check = true;

        const DATE = /^(\d){2}[\/](\d){2}[\/](\d){4}/;
        check = check && DATE.test(ngay);

        //Get day, month, year
        let days = ngay.split("/");
        let dd = days[0];
        let mm = days[1];
        let yy = days[2];

        //Check leap year
        let isLeapYear = ((yy % 4 === 0) && (yy % 100 !== 0)) || (yy % 400 === 0);

        //Number of days of each month
        let listDay;
        if (isLeapYear)
            listDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        else listDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        check = check && (mm >= 1 && mm <= 12);
        check = check && (dd >= 1 && dd <= listDay[mm - 1]);

        return check;
    }
}
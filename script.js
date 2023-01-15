// Function Literal Pada JavaScript

/*let data = {
    nama : "Dwi Star Muda",
    member : "Gold",
    poin : 20,

    anggota : {
        daftar : "12 Januari 1993",
        login : "Mac OS"
    }
}*/

// Function Declaration pada JavaScript

/*function member (nama, poin, kota) {
    const data = {};
    data.nama = nama;
    data.poin = poin;
    data.kota = kota;
    return data;        
}

const member1 = member('Dwi Star Muda', 200, 'Tanjung Morawa');
console.log(member1);
console.log(member1.kota);
console.log(member1['poin']);*/

// Function Constructor pada JavaScript

/*function member (nama, poin, kota) {
    this.nama = nama;
    this.poin = poin;
    this.kota = kota;
}

let data = new member('Dwi Star Muda', 1500, 'Medan');
console.log(data);
console.log(data.kota);
console.log(data.poin);
console.log(data.nama);*/

function Angkot (supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if ( this.penumpang.length === 0 ){
            alert('Angkot masih kosong');
            return false;
        }

        for(let i = 0; i < this.penumpang.length; i++){
            if (this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }

}

let angkot1 = new Angkot('Eko', ['Amplas', 'Tanjung'], [], 0);
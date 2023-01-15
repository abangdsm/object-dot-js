/*let data = {
    nama : "Dwi Star Muda",
    member : "Gold",
    poin : 20,

    anggota : {
        daftar : "12 Januari 1993",
        login : "Mac OS"
    }
}*/

function member (nama, poin, kota) {
    const data = {};
    data.nama = nama;
    data.poin = poin;
    data.kota = kota;
    return data;        
}

const member1 = member('Dwi Star Muda', 200, 'Tanjung Morawa');
console.log(member1);
console.log(member1.kota);
console.log(member1['poin']);
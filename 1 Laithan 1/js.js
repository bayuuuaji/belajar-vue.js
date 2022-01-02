const member = {
  name: 'Bayu Aji',
  umur: 19,
  isactive: true,
  qty: 1,
  namaDepan: 'Asesiv',
  namaBelakang: 'Lala',
  bilangan: 1,
  link: '<a href="">Kelasku</a>',
  gambar: '../img/vue.png',
  diklik: '',
  kelas: [],
  halaman: '',
  numbers: [1, 2, 3, 4, 5],
};

const vm = new Vue({
  el: '#app',
  data: member,
  methods: {
    getName: function () {
      return 'Hello ' + this.name;
    },
    ubahNama: function (namaBaru) {
      this.name = namaBaru;
    },
    handleClick: function () {
      this.bilangan++;
      if (this.bilangan % 2 == 0) {
        this.gambar = '../img/header.png';
      } else {
        this.gambar = '../img/vue.png';
      }
    },
    cariBilanganGenap: function (e) {
      return e.filter((i) => {
        return i % 2 == 0;
      });
    },
  },
  computed: {
    totalBayar: function () {
      return this.qty * 10000;
    },
    namaLengkap: function (e) {
      e = this.namaDepan + ' ' + this.namaBelakang;
      e = e.toUpperCase();
      return e;
    },
    hasilBilangan: function (e) {
      e = this.bilangan % 2 === 0 ? 'Genap' : 'Ganjil';
      return 'Bilangan ini adalah bilangan ' + e;
    },
  },
});

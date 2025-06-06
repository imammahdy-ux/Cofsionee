
const sliderImages = document.querySelectorAll('#galeri-slider img');
let currentIndex = 0;

function showSlide(index) {
  sliderImages.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}
function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderImages.length;
  showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);

function toggleFotoPameran(event) {
  event.preventDefault();
  const foto = document.getElementById('foto-pameran');
  foto.style.display = (foto.style.display === 'block') ? 'none' : 'block';
}
function toggleFoto(event, id) {
    event.preventDefault();
    var el = document.getElementById(id);
    el.hidden = !el.hidden
}
//piket
const jadwalPelajaran = {
  "Senin": ["MAT", "PJK", "B.IND", "KNK"],
  "Selasa": ["MPP", "BIG", "PAI", "KNK"],
  "Rabu": ["PKN", "BIG", "BIN"],
  "Kamis": ["KNK", "PKK"],
  "Jumat": ["KNK", "SEI", "BMD"]
};

const jadwalPiket = {
  "Senin": ["IMELDA A.S", "TSANIA", "IMAM MAHDI", "FAREL NANDA"],
  "Selasa": ["DENDRA S", "AIS FIGROH N", "AGIS K", "SELFI PRAMAS.Y"],
  "Rabu": ["DAVID K", "DIANA DEWI A", "SANTIYANI A", "ALDIANSYAH J.P"],
  "Kamis": ["NAURA R", "NANDIYA L", "AGUSTIN M"],
  "Jumat": ["DANIL ANDADI", "WULAN SARI", "VANSYA A.P"]
};

function getHariIni() {
  const hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const today = new Date();
  return hariList[today.getDay()];
}

function tampilkanJadwalHariIni() {
  const hariIni = getHariIni();

  let pelajaran = jadwalPelajaran[hariIni] ? jadwalPelajaran[hariIni].join(", ") : "Libur";
  let piket = jadwalPiket[hariIni] ? jadwalPiket[hariIni].join(", ") : "Tidak ada";

  const container = document.getElementById("jadwalHariIni");
  container.innerHTML = `
    <h2>Jadwal ${hariIni}</h2>
    <table>
      <thead>
        <tr><th>Mata Pelajaran</th><th>Piket</th></tr>
      </thead>
      <tbody>
        <tr>
          <td>${pelajaran}</td>
          <td>${piket}</td>
        </tr>
      </tbody>
    </table>
  `;
}
// Jalankan saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  tampilkanJadwalHariIni();
});
window.addEventListener('DOMContentLoaded', () => {
  const welcome = document.getElementById('welcome');

  // Setelah 2.5 detik, animasikan fade out
  setTimeout(() => {
    welcome.classList.add('fade-out');
  }, 2500);

  // Setelah animasi selesai, hapus elemen welcome agar tidak menumpuk
  setTimeout(() => {
    welcome.remove();
  }, 3500);
});

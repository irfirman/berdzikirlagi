// Objek untuk menyimpan hitungan per kategori
const counts = {
  default: 0,
  category1: 0,
  category2: 0,
  category3: 0
};

// Menyimpan kategori yang dipilih
let currentCategory = 'default';
let soundEnabled = false; // Status suara default: dinonaktifkan

/* Fungsi untuk menampilkan angka yang diperbarui */
function updateDisplay() {
  document.getElementById('display').innerText = counts[currentCategory]; // Menampilkan hitungan untuk kategori yang dipilih
}

/* Fungsi untuk menambah hitungan */
function increment() {
  counts[currentCategory]++; // Menambah hitungan untuk kategori yang dipilih
  updateDisplay(); // Memperbarui tampilan angka

  // Jika fitur suara diaktifkan, putar suara
  if (soundEnabled) {
    document.getElementById('soundEffect').play();
  }

  // Jika perangkat mendukung vibrasi, maka ponsel akan bergetar
  if (navigator.vibrate) {
    navigator.vibrate(100); // Bergetar selama 100ms
  }
}

/* Fungsi untuk mengurangi hitungan */
function decrement() {
  if (counts[currentCategory] > 0) { // Memastikan nilai hitungan tidak kurang dari 0
    counts[currentCategory]--; // Mengurangi hitungan untuk kategori yang dipilih
    updateDisplay(); // Memperbarui tampilan angka

    // Jika fitur suara diaktifkan, putar suara
    if (soundEnabled) {
      document.getElementById('backSoundEffect').play();
    }
  }
}

/* Fungsi untuk mengatur ulang hitungan */
function resetCount() {
  counts[currentCategory] = 0; // Mengatur hitungan kategori saat ini ke 0
  updateDisplay(); // Memperbarui tampilan angka
}

/* Fungsi untuk memperbarui kategori yang dipilih */
function updateCategory() {
  const select = document.getElementById('categorySelect');
  currentCategory = select.value; // Mendapatkan nilai kategori yang dipilih
  updateDisplay(); // Memperbarui tampilan angka untuk kategori yang dipilih
}

/* Fungsi untuk mengaktifkan/menonaktifkan suara */
function toggleSound() {
  soundEnabled = !soundEnabled; // Membalik status suara
  const soundButton = document.getElementById('soundToggle');

  // Mengubah teks tombol berdasarkan status suara
  if (soundEnabled) {
    soundButton.innerText = "Disable Sound";
  } else {
    soundButton.innerText = "Enable Sound";
  }
}

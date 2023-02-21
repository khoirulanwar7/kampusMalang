const perguruans = [
  {
    id: 0,
    img: "img/kampus/polinema.png",
    title: "Politeknik Negeri Malang",
    desc: "Polinema adalah institusi pendidikan tinggi vokasi yang terletak di kota Malang. Malang adalah kota terbesar kedua diJawa Timur,Indonesia. Malang merupakan tempat yang nyaman untuk belajar karena udaranya yang sejuk dan populasi yang tidak begitu padat (sekitar 800 ribu penduduk).",
    link: "polinema.html",
    kategori: "Negeri",
  },
  {
    id: 1,
    img: "img/kampus/ub.jpg",
    title: "Universitas Brawijaya Malang",
    desc: "Universitas Brawijaya (UB) didirikan oleh Presiden Republik Indonesia melalui kawat no. 258/K/61 dikirim pada tanggal 11 Juli 1961.",
    link: "ub.html",
    kategori: "Negeri",
  },
  {
    id: 2,
    img: "img/kampus/UM-malang.jpg",
    title: "Universitas Negeri Malang",
    desc: "Berawal dari Perguruan Tinggi Pendidikan Guru (PTPG) pada tahun 1954, universitas di Malang ini resmi berganti nama sebagai Universitas Negeri Malang pada tahun 1999.",
    link: "um.html",
    kategori: "Negeri",
  },
  {
    id: 3,
    img: "img/kampus/uin.jpg",
    title: "UIN Maulana Malik Ibrahim",
    desc: "Universitas Islam Negeri Maulana Malik Ibrahim Malang berdiri berdasarkan Surat Keputusan Presiden No. 50 tanggal 21 Juni 2004.",
    link: "uin.html",
    kategori: "Negeri",
  },
  {
    id: 4,
    img: "img/kampus/unisma.jpg",
    title: "Universitas Islam Malang",
    desc: "Univeristas Islam Malang diawali oleh adanya keinginan semangat dan gagasan para tokoh masyarakat, ulama dan cendekiawan muslim dikalangan Nahdlatul Ulama di kota Malang, Untuk mendirikan suatu Perguruan Tinggi Islam yang besar, berkualitas dan mandiri.",
    link: "unisma.html",
    kategori: "Swasta",
  },
  {
    id: 5,
    img: "img/kampus/umm.jpg",
    title: "Universitas Muhammadiyah Malang",
    desc: "Universitas Muhammadiyah Malang (UMM) menjadi tempat pembelajaran, penelitian dan pengabdian masyarakat yang konsisten menyebarkan energi positif ke khalayak luas. Sejak 1964, UMM terus  berkontribusi dan mengabdi pada Bangsa. Pada setiap generasi, UMM menjadi pemantik mimpi, membesarkan cita-cita, melahirkan pemimpin masa depan. ",
    link: "umm.html",
    kategori: "Swasta",
  },
  {
    id: 6,
    img: "img/kampus/unmer.jpg",
    title: "Universitas Merdeka Malang",
    desc: "Universitas Merdeka Malang merupakan Perguruan Tinggi Swasta yang didirikan sejak tanggal 29 Januari 1964. Lembaga pendidikan ini didirikan oleh  R. Edwin Soedardji, Soekiman Dahlan, SH., Frasnsiscus Soetrisno, Soegondo, Soetikno, SH., Dharma yang diselenggarakan oleh  Yayasan Perguruan Tinggi Merdeka Pusat Malang  (YPTMPM) di Malang. YPTMPM mendapatkan pengakuan resmi sebagai badan hukum pada tanggal 5 Juli 1964 melalui  Akta Nomor 5.a tanggal 5 Juli 1964). Itulah mengapa Universitas Merdeka Malang menetapkan tanggal 5 Juli sebagai Dies Natalis yang diperingati setiap tahunnya.  ",
    link: "unmer.html",
    kategori: "Swasta",
  },
  {
    id: 7,
    img: "img/kampus/unikama.jpg",
    title: "Universitas PGRI Kanjuruhan Malang",
    desc: "Universitas PGRI Kanjuruhan Malang adalah salah satu Perguruan Tinggi Swasta terkemuka di Kota Malang dengan misi Menyelenggarakan pendidikan dan pembelajaran berbasis ipteks untuk Menghasilkan lulusan yang memiliki daya saing, kreatif, mandiri, toleran, demokratis, dan religius.",
    link: "unikama.html",
    kategori: "Swasta",
  },
  {
    id: 8,
    img: "img/kampus/binus.jpeg",
    title: "Universitas Bina Nusantara (BINUS)",
    desc: "Universitas Bina Nusantara dimulai pada 21 Oktober 1974. Berawal dari kursus jangka pendek bernama Kursus Komputer Modern, yang kemudian berkembang karena landasannya yang kuat dan visi yang komprehensif.",
    link: "binus.html",
    kategori: "Swasta",
  },
  {
    id: 9,
    img: "img/kampus/Ma-Chung.jpg",
    title: "Universitas Ma-Chung Malang",
    desc: "Ma Chung merupakan sebuah sekolah bersejarah di kota Malang - Jawa Timur, yang telah meluluskan alumni-alumni terbaiknya sejak era tahun 1950an. Sekolah ini telah mewariskan standar pendidikan dan pembangunan nilai-nilai moral yang konsisten terhadap lulusannya. Bekas gedung sekolah Ma Chung masih dapat disaksikan oleh generasi masa kini meski saat ini digunakan oleh institusi lain, namun satu hal yang tidak akan lekang oleh jaman: Spirit Alumni Ma Chung.",
    link: "machung.html",
    kategori: "Swasta",
  },
];

const categories = [...new Set(perguruans.map((kampus)=>{return kampus}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((kampus)=> {
    return(
      kampus.title.toLocaleLowerCase().includes(searchData),
      kampus.kategori.toLocaleLowerCase().includes(searchData)
    )
  }) 
  displayItem(filterData)
})

const displayItem = (kampus) => {
  document.getElementById('root').innerHTML=kampus.map((kampus)=> {
    var {img, title, desc, link} = kampus;
    return (
        `<div class="w-full px-4 md:w-1/2 lg:w-1/4">
          <div class="bg-white rounded-xl border overflow-hidden shadow-lg mb-12">
            <img src=${img} alt="" class="w-full h-48">
            <div class="py-8 px-6">
              <h3>
                <a href="#" class="block mb-3 font-semibold text-xl text-black hover:text-primary">
                  ${title}
                </a>
              </h3>
              <p class="text-base font-medium text-slate-600 mb-6 line-clamp-4 lg:line-clamp-3">
                ${desc}
              </p>
              <a href=${link}
                class="font-medium text-sm text-white bg-blue-400 py-2 px-4 rounded-lg hover:bg-blue-600 hover:shadow-md">
                Selengkapnya...
              </a>
            </div>
          </div>
        </div>`
      )
  }).join('')
}
displayItem(categories)

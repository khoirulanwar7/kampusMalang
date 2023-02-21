const jurusans = [
  {
    id: 0,
    img: "",
    title: "Teknologi Informasi",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 1,
    img: "",
    title: "Teknik Elecktro",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 2,
    img: "",
    title: "Teknik Mesin",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 3,
    img: "",
    title: "Teknik Pertambangan",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 4,
    img: "",
    title: "Teknik Perminyakan",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 5,
    img: "",
    title: "Teknik Industri",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 5,
    img: "",
    title: "Teknik Kimia",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 6,
    img: "",
    title: "Teknik Penerbangan",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 6,
    img: "",
    title: "Teknik Otomotif",
    desc: "",
    link: '#',
    kategori: "Teknik",
  },
  {
    id: 7,
    img: "",
    title: "Ilmu Komputer",
    desc: "",
    link: '#',
    kategori: "Komputer",
  },
  {
    id: 8,
    img: "",
    title: "Sistem Infomasi",
    desc: "",
    link: '#',
    kategori: "Komputer",
  },
  {
    id: 8,
    img: "",
    title: "Manajemen Informatika",
    desc: "",
    link: '#',
    kategori: "Komputer",
  },
  {
    id: 9,
    img: "",
    title: "Sains Data",
    desc: "",
    link: '#',
    kategori: "Komputer",
  },
  {
    id: 10,
    img: "",
    title: "Arsitektur",
    desc: "",
    link: '#',
    kategori: "Sipil & Bangunan",
  },
  {
    id: 11,
    img: "",
    title: "Konstruksi",
    desc: "",
    link: '#',
    kategori: "Sipil & Bangunan",
  },
  {
    id: 12,
    img: "",
    title: "Teknik Sipil",
    desc: "",
    link: '#',
    kategori: "Sipil & Bangunan",
  },
  {
    id: 12,
    img: "",
    title: "Agribisnis",
    desc: "",
    link: '#',
    kategori: "Pertanian",
  },
  {
    id: 13,
    img: "",
    title: "Agroteknologi",
    desc: "",
    link: '#',
    kategori: "Pertanian",
  },
  {
    id: 14,
    img: "",
    title: "Agroteknologi",
    desc: "",
    link: '#',
    kategori: "Pertanian",
  },
];

const categories = [
  ...new Set(
    jurusans.map((prodi) => {
      return prodi;
    })
  ),
];

document.getElementById("searchBar").addEventListener("keyup", (e) => {
  const searchData = e.target.value.toLowerCase();
  const filterData = categories.filter((prodi) => {
    return prodi.title.toLocaleLowerCase().includes(searchData);
  });
  displayItem(filterData);
});

const displayItem = (prodi) => {
  document.getElementById("root").innerHTML = prodi
    .map((prodi) => {
      var { img, title, desc, link } = prodi;
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
    })
    .join("");
};
displayItem(categories);

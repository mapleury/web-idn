

const slider = document.querySelector(".slider");
const form = document.querySelector(".form");
let mouseDownAt = 0;
let left = 0;
slider.onmousedown = (e) => {
   mouseDownAt = e.clientX;
   console.log(mouseDownAt);
};
slider.onmouseup = () => {
   mouseDownAt = 0; 
   slider.style.userSelect = 'unset';
   slider.style.cursor = 'unset';
   form.style.pointerEvents = 'unset';
   form.classList.remove('left');
   form.classList.remove('right');
}


const items = document.querySelectorAll('.item'); // Ambil semua elemen item


function updateClasses() {
   const items = document.querySelectorAll('.item'); // Ambil semua elemen item
   items.forEach((item) => {
       const rect = item.getBoundingClientRect();
       const centerX = window.innerWidth / 2; // Posisi tengah layar
       const itemCenterX = rect.left + rect.width / 2;


       // Reset semua kelas
       item.classList.remove('active', 'near-left', 'near-right');


       // Tambahkan kelas berdasarkan posisi
       if (Math.abs(itemCenterX - centerX) < rect.width / 2) {
           item.classList.add('active');
       } else if (itemCenterX < centerX) {
           item.classList.add('near-left');
       } else if (itemCenterX > centerX) {
           item.classList.add('near-right');
       }
   });
}


// Panggil updateClasses di awal
updateClasses();


// Perbarui posisi setiap kali slider di-drag
slider.addEventListener('mousemove', (e) => {
   if (mouseDownAt === 0) return;


   let speed = 3; // Kecepatan geser
   let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
   let leftLimit = form.offsetWidth - slider.offsetWidth / 2;


   if (leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit) {
       form.style.setProperty('--left', `${leftTemporary}px`);
       left = leftTemporary;
       mouseDownAt = e.clientX;


       updateClasses();
   }
});






function updateClasses() {
   items.forEach((item, index) => {
       let rect = item.getBoundingClientRect();
       let centerX = window.innerWidth / 2;
       let offset = rect.left + rect.width / 2 - centerX;


       item.classList.remove('active', 'near-left', 'near-right');


       if (Math.abs(offset) < rect.width / 2) {
           item.classList.add('active');
       } else if (offset < 0) {
           item.classList.add('near-left');
       } else {
           item.classList.add('near-right');
       }
   });
}


// Event mousedown
slider.onmousedown = (e) => {
   mouseDownAt = e.clientX;
   console.log(mouseDownAt);
};


// Event mouseup
slider.onmouseup = () => {
   mouseDownAt = 0;
   slider.style.userSelect = 'unset';
   slider.style.cursor = 'unset';
   form.style.pointerEvents = 'unset';
};


// Event mousemove
slider.onmousemove = (e) => {
   if (mouseDownAt == 0) return;


   slider.style.userSelect = 'none';
   slider.style.cursor = 'grab';
   form.style.pointerEvents = 'none';


   let speed = 3;
   let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
   let leftLimit = form.offsetWidth - slider.offsetWidth / 2;


   if (leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit) {
       form.style.setProperty('--left', left + 'px');
       left = leftTemporary;
       mouseDownAt = e.clientX;


       // Perbarui posisi elemen
       updateClasses();
   }
};


// Perbarui kelas saat load awal
updateClasses();







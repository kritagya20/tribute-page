//NAVBAR SECTION
try {
  window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll-nav', window.scrollY >1);
    document.querySelector('#logo').classList.toggle('window-scroll-logo', window.scrollY >1);
    // window.scrollY > 1 defines the scroll of Y axis in pixels after which is event listner will fire 

  


  });
} catch (e) {
  console.log(`Error caught in navbar: ${e}`);
}
//=======================================================================================




//RECORDS SECTION
try {
  //selecting the different cards to dispay records
  const t20iDisplay = document.getElementById('t20i-records'); 
  const odiDisplay = document.getElementById('odi-records');
  const testDisplay = document.getElementById('test-records');
  const iplDisplay = document.getElementById('ipl-records');
  var closeBtnRecords = document.querySelectorAll('.close-record-btn');

  //DISPLAYING T20I RECORDS 
  t20iDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#t20i-records-display');
    element.classList.add('full-screen-display'); //DISPLAYING CONTENT
    element.classList.add('display-records');
    element.classList.remove('no-display');
    document.querySelector('body').classList.add('overflow-hidden'); // RESTRICTING-OVERFLOW-TO-STOP-SCROLLING
  });

  //DISPLAYING ODI RECORDS 
  odiDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#odi-records-display');
    element.classList.add('full-screen-display'); //DISPLAYING CONTENT
    element.classList.add('display-records');
    element.classList.remove('no-display');
    document.querySelector('body').classList.add('overflow-hidden'); // RESTRICTING-OVERFLOW-TO-STOP-SCROLLING
  });

  //DISPLAYING TEST RECORDS 
  testDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#test-records-display');
    element.classList.add('full-screen-display'); //DISPLAYING CONTENT
    element.classList.add('display-records');
    element.classList.remove('no-display');
    document.querySelector('body').classList.add('overflow-hidden'); // RESTRICTING-OVERFLOW-TO-STOP-SCROLLING
  });

  //DISPLAYING IPL RECORDS 
  iplDisplay.addEventListener('click', () =>{
    var element = document.querySelector('#ipl-records-display');
    element.classList.add('full-screen-display'); //DISPLAYING CONTENT
    element.classList.add('display-records');
    element.classList.remove('no-display'); 
    document.querySelector('body').classList.add('overflow-hidden'); // RESTRICTING-OVERFLOW-TO-STOP-SCROLLING
  });

  // CLOSING  RECORDS
  closeBtnRecords.forEach(function (closeBtn){
    closeBtn.addEventListener('click', () =>{
      var parent = closeBtn.parentElement;
      parent.classList.remove('full-screen-display'); //HIDING-DISPLAY
      parent.classList.remove('display-records');
      parent.classList.add('no-display');
      document.querySelector('body').classList.remove('overflow-hidden'); // ALLOWING-OVERFLOW-TO-SCROLL
    })
  });
} catch (e) {
    console.log(`Error caught in records: ${e}`);
}
//=======================================================================================





//GALLERY SECTION
try {
  const galleryObject = [
    {
      num: 1,
      id:"image-gallery-1",
      img: "./assets/images/gallery/msd-gallery-img1.jpg"
    },
    {
      num: 2,
      id:"image-gallery-2",
      img: "./assets/images/gallery/msd-gallery-img2.jpg"
    },
    {
      num: 3,
      id:"image-gallery-3",
      img: "./assets/images/gallery/msd-gallery-img3.jpg"
    },
    {
      num: 4,
      id:"image-gallery-4",
      img: "./assets/images/gallery/msd-gallery-img4.jpg"
    },
    {
      num: 5,
      id:"image-gallery-5",
      img: "./assets/images/gallery/msd-gallery-img5.jpg"
    },
    {
      num: 6,
      id:"image-gallery-6",
      img: "./assets/images/gallery/msd-gallery-img6.jpg"
    },
    {
      num: 7,
      id:"image-gallery-7",
      img: "./assets/images/gallery/msd-gallery-img7.jpg"
    },
    {
      num: 8,
      id:"image-gallery-8",
      img: "./assets/images/gallery/msd-gallery-img8.jpg"
    },
    {
      num: 9,
      id:"image-gallery-9",
      img: "./assets/images/gallery/msd-gallery-img9.jpg"
    },
    {
      num: 10,
      id:"image-gallery-10",
      img: "./assets/images/gallery/msd-gallery-img10.jpg"
    },
    {
      num: 11,
      id:"image-gallery-1",
      img: "./assets/images/gallery/msd-gallery-img11.jpg"
    },
    {
      num: 12,
      id:"image-gallery-12",
      img: "./assets/images/gallery/msd-gallery-img12.jpg"
    },
    {
      num: 13,
      id:"image-gallery-13",
      img: "./assets/images/gallery/msd-gallery-img13.jpg"
    },
    {
      num: 14,
      id:"image-gallery-14",
      img: "./assets/images/gallery/msd-gallery-img14.jpg"
    },
    {
      num: 15,
      id:"image-gallery-15",
      img: "./assets/images/gallery/msd-gallery-img15.jpg"
    },
    {
      num: 16,
      id:"image-gallery-16",
      img: "./assets/images/gallery/msd-gallery-img16.jpg"
    },
    {
      num: 17,
      id:"image-gallery-17",
      img: "./assets/images/gallery/msd-gallery-img17.jpg"
    },
    {
      num: 18,
      id:"image-gallery-18",
      img: "./assets/images/gallery/msd-gallery-img18.jpg"
    },
    {
      num: 19,
      id:"image-gallery-19",
      img: "./assets/images/gallery/msd-gallery-img19.jpg"
    },
    {
      num: 20,
      id:"image-gallery-20",
      img: "./assets/images/gallery/msd-gallery-img20.jpg",
    },
    {
      num: 21,
      id:"image-gallery-21",
      img: "./assets/images/gallery/msd-gallery-img21.jpg"
    },
    {
      num: 22,
      id:"image-gallery-22",
      img: "./assets/images/gallery/msd-gallery-img22.jpg"
    },
    {
      num: 23,
      id:"image-gallery-23",
      img: "./assets/images/gallery/msd-gallery-img23.jpg"
    },
    {
      num: 24,
      id:"image-gallery-24",
      img: "./assets/images/gallery/msd-gallery-img24.jpg"
    },
    {
      num: 25,
      id:"image-gallery-25",
      img: "./assets/images/gallery/msd-gallery-img25.jpg"
    },
    {
      num: 26,
      id:"image-gallery-26",
      img: "./assets/images/gallery/msd-gallery-img26.jpg"
    },
    {
      num: 27,
      id:"image-gallery-27",
      img: "./assets/images/gallery/msd-gallery-img27.jpg"
    },
    {
      num: 28,
      id:"image-gallery-28",
      img: "./assets/images/gallery/msd-gallery-img28.jpg"
    },
    {
      num: 29,
      id:"image-gallery-29",
      img: "./assets/images/gallery/msd-gallery-img29.jpg"
    },
    {
      num: 30,
      id:"image-gallery-30",
      img: "./assets/images/gallery/msd-gallery-img30.jpg"
    },
    {
      num: 31,
      id:"image-gallery-31",
      img: "./assets/images/gallery/msd-gallery-img31.jpg"
    },
    {
      num: 32,
      id:"image-gallery-32",
      img: "./assets/images/gallery/msd-gallery-img32.jpg"
    },
    {
      num: 33,
      id:"image-gallery-33",
      img: "./assets/images/gallery/msd-gallery-img33.jpg"
    },
    {
      num: 34,
      id:"image-gallery-34",
      img: "./assets/images/gallery/msd-gallery-img34.jpg"
    },
    {
      num: 35,
      id:"image-gallery-35",
      img: "./assets/images/gallery/msd-gallery-img35.jpg"
    },
    {
      num: 36,
      id:"image-gallery-36",
      img: "./assets/images/gallery/msd-gallery-img36.jpg"
    },
    {
      num: 37,
      id:"image-gallery-37",
      img: "./assets/images/gallery/msd-gallery-img37.jpg"
    },
    {
      num: 38,
      id:"image-gallery-38",
      img: "./assets/images/gallery/msd-gallery-img38.jpg"
    },
    {
      num: 39,
      id:"image-gallery-39",
      img: "./assets/images/gallery/msd-gallery-img39.jpg"
    },
    {
      num: 40,
      id:"image-gallery-40",
      img: "./assets/images/gallery/msd-gallery-img40.jpg"
    },
    {
      num: 41,
      id:"image-gallery-41",
      img: "./assets/images/gallery/msd-gallery-img41.jpg"
    },
    {
      num: 42,
      id:"image-gallery-42",
      img: "./assets/images/gallery/msd-gallery-img42.jpg"
    },
    {
      num: 43,
      id:"image-gallery-43",
      img: "./assets/images/gallery/msd-gallery-img43.jpg"
    },
    {
      num: 44,
      id:"image-gallery-44",
      img: "./assets/images/gallery/msd-gallery-img44.jpg"
    },
    {
      num: 45,
      id:"image-gallery-45",
      img: "./assets/images/gallery/msd-gallery-img45.jpg"
    },
    {
      num: 46,
      id:"image-gallery-46",
      img: "./assets/images/gallery/msd-gallery-img46.jpg"
    },
    {
      num: 47,
      id:"image-gallery-47",
      img: "./assets/images/gallery/msd-gallery-img47.jpg"
    },
    {
      num: 48,
      id:"image-gallery-48",
      img: "./assets/images/gallery/msd-gallery-img48.jpg"
    }
  ]; //items object
  const gallery = document.querySelector('#image-gallery'); //selecting the image container
  const largeGallery = document.querySelector('#full-screen-gallery'); //selecting the full screen image section
  const largeImgContainer = document.querySelector('#full-screen-image-container'); //selecting the full screen image container
  const galleryBtn = document.querySelector('#gallery-btn'); //selecting the gallery button
  const closeBtnGallery = document.querySelectorAll('.close-gallery-btn'); //selecting the close button of gallery
  const previousBtnGallery = document.querySelector('.previous-gallery-btn'); //selecting the previous button of gallery
  const nextBtnGallery = document.querySelector('.next-gallery-btn'); //selecting the next button of gallery


  //adding the event listner to load the content on window load
  window.addEventListener('DOMContentLoaded',function (){
    displayGalleryImages(galleryObject); 
  });

  //adding a click event to expand and shrink the gallery
  galleryBtn.addEventListener('click', fullGalleryView);

  //adding a click event to view image on full screen
  gallery.addEventListener('click', fullScreenGallery);


  // function to dislay images by appending html code through js
  function displayGalleryImages(images){
    //using the map function to edit our object (galleryObject)
    let displayGallery = galleryObject.map(function(image){

      //returning the different results as stored in our object by templating the html docs
      return `<figure>
                <img src=${image.img} alt="MS Dhoni Image" class="gallery-img" id=${image.id}>
              </figure> `
            ;
    });
    displayGallery = displayGallery.join(''); //joining all the returns of the map fucntion into single string
    gallery.innerHTML = displayGallery; //adding our string into html
  }

  // function to enlarge the gallery and shrink it back
  function fullGalleryView () {
    const visibility = galleryBtn.getAttribute("data-visible"); //checking the visibility of the full gallery display
    if (visibility === "false") {        
      galleryBtn.setAttribute("data-visible", true); // changes the attribute to false        
      gallery.classList.add('full-gallery'); //adding class to display full gallery        
      galleryBtn.innerText = "Show Less"; // changes button text to Hide Details
    } else {        
      galleryBtn.setAttribute("data-visible", false); // changes the attribute to True
      gallery.classList.remove('full-gallery'); //removing class to hide full gallery       
      galleryBtn.innerText = "Show More"; // changes button text to Show Details      
    }
  }

  // function to set full screen for gallery
  function fullScreenGallery (e) {
    var clickedImage = e.target;
    var source = clickedImage.getAttribute('src');
    var currentImage;

    largeGallery.classList.add('full-screen-display'); //DISPLAYING CONTENT
    largeGallery.classList.remove('no-display'); 
    document.querySelector('body').classList.add('overflow-hidden'); // RESTRICTING-OVERFLOW-TO-STOP-SCROLLING

    var displayImage = galleryObject.map(function(image){
      //matching the exact image source to display specific picture on which user is clicking
      if (source == image.img){

        currentImage = image.num;
        //returning the different results as stored in our object by templating the html docs
        return `<figure>
                  <img src=${image.img} alt="MS Dhoni Image" class="gallery-img" id=${image.id}>
                </figure> `
              ;
      }
    });
    largeImgContainer.innerHTML = displayImage; //adding our string into html
  }

  //adding event listner close the full screen mode of gallery
  closeBtnGallery.forEach(function (closeBtn){
    closeBtn.addEventListener('click', () =>{
      var parent = closeBtn.parentElement;
      parent.classList.remove('full-screen-display'); //HIDING-DISPLAY
      parent.classList.add('no-display');
      document.querySelector('body').classList.remove('overflow-hidden'); // ALLOWING-OVERFLOW-TO-SCROLL
    });
  });
} catch (e) {
  console.log(`Error caught in gallery: ${e}`);
}
//=======================================================================================





//BIOGRAPHY SECTION
try{
  var biographyBtn = document.querySelectorAll('.biography-detailed-btn'); //storing all buttons of biography section
  var closeBtnBiography = document.querySelectorAll('.close-biography-btn'); //storing all close buttons of biography section

  //looping the buttons 
  biographyBtn.forEach(function(btn) {
    var parentContainer = btn.parentElement.parentElement;
    var parent = btn.parentElement;
    var details = btn.nextElementSibling;
    var closeBtn = btn.previousElementSibling;

    //adding click event to display biography in detail
    btn.addEventListener('click', function (){
      parentContainer.classList.add('full-screen-display');
      details.classList.remove('no-display');
      closeBtn.classList.remove('no-display');
      btn.classList.add('no-display');    
      document.querySelector('body').classList.add('overflow-hidden'); // restricting overflow- to stop scrolling
    });  

    //adding click event to hide biography in detail
    closeBtn.addEventListener('click', function(){
      parentContainer.classList.remove('full-screen-display');
      details.classList.add('no-display');
      closeBtn.classList.add('no-display');
      btn.classList.remove('no-display');
      document.querySelector('body').classList.remove('overflow-hidden'); // allowing overflow for scrolling
    });

  });
} catch (e) {
  console.log(`Error caught in biography: ${e}`);
}
//=======================================================================================





//HONOURS SECTION
try{
  const honourBtn1 = document.querySelector('#national-honour-btn'); //selecting all tabs from the tablist
  const honourBtn2 = document.querySelector('#all-honour-btn');
  const honourBtn3 = document.querySelector('#sporting-honour-btn');
  const honourContent1 = document.querySelector('.national-honours-ul'); //selecting the different tab data
  const honourContent3 = document.querySelector('.sporting-honours-ul');

  //adding click event to display data of specific tab
  honourBtn1.addEventListener('click', function () {
    honourBtn3.classList.remove('clicked-btn');  //making other buttons normal
    honourBtn2.classList.remove('clicked-btn');
    honourBtn1.classList.add('clicked-btn'); //adding different styling on slected button
    honourContent1.classList.remove('no-display'); //hiding the data of other tabs
    honourContent3.classList.add('no-display'); //displaying the data selected tab
  });

  honourBtn2.addEventListener('click', function () {
    honourBtn1.classList.remove('clicked-btn'); //making other buttons normal
    honourBtn3.classList.remove('clicked-btn');
    honourBtn2.classList.add('clicked-btn'); //adding different styling on slected button
    honourContent3.classList.remove('no-display'); //hiding the  data of other tabs
    honourContent1.classList.remove('no-display'); //displaying the data selected tab
  });

  honourBtn3.addEventListener('click', function () {
    honourBtn1.classList.remove('clicked-btn'); //making other buttons normal
    honourBtn2.classList.remove('clicked-btn');
    honourBtn3.classList.add('clicked-btn'); //adding different styling on slected button
    honourContent3.classList.remove('no-display'); //hiding the data of other tabs
    honourContent1.classList.add('no-display'); //displaying the data selected tab
  });
} catch (e) {
  console.log(`Error caught in honours: ${e}`);
}
//=======================================================================================





//STATISTICS SECTION
try{
  // using chart1.js to for creating graphs
  // chart1
  const chart1= document.getElementById('captainship').getContext('2d');
  const captainship = new Chart(chart1, {
    type: 'pie',
    data: {
      labels: ["PLAYED","LOST", "WON"],
      datasets: [{
        label: 'WON',
        data: [331, 178, 120],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(247, 88, 66, 0.95)',
          'rgba(247, 201, 75, 0.95)'
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3500,
        easing: 'easeInOutQuint',
        loop: true
      }
    }    
  });

  // chart2
  const chart2 = document.getElementById('icc-tornaments').getContext('2d');
  const iccTornaments = new Chart(chart2, {
    type: 'pie',
    data: {
      labels: ["PLAYED","RUNNER UP","LOST", "WON"],
      datasets: [{
        label: 'WON',
        data: [7, 3, 1, 4],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3700,
        easing: 'easeInOutQuint',
        loop: true
      }
    }
  });

  // chart3
  const chart3 = document.getElementById('ipl-league').getContext('2d');
  const iplLeague = new Chart(chart3, {
    type: 'pie',
    data: {
      labels: ["PLAYED","RUNNER UP", "LOST", "WON"],
      datasets: [{
        label: 'WON',
        data: [12, 4, 5, 4],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3300,
        easing: 'easeInOutQuint',
        loop: true
      }
    }
  });

  //chart4
  const chart4= document.getElementById('boundaries').getContext('2d');
  const boundariesChart = new Chart(chart4, {
    type: 'line',
    data: {
      labels: ["TEST", "ODI", "T20", "IPL"],
      datasets: [{
        label: 'FOUR',
        data: [544, 826, 116, 335],
        
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ],
        borderColor: [
          'rgba(0, 119, 182, 1)'
        ]
      },
      {
        label: 'SIX',
        data: [78, 229, 52, 222],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ],
        borderColor: [        
          'rgba(0, 191, 142, 1)'
        ]
      }]    
    },
    options: {
      responsive: false,
      animation: {
        duration: 4000,
        easing: 'easeInOutCirc',
        loop: true
      }
    }
  });

  //chart5
  const chart5 = document.getElementById('avg-str').getContext('2d');
  const AvgStrChart = new Chart(chart5, {
    type: 'line',
    data: {
      labels: ["TEST", "ODI", "T20", "IPL"],
      datasets: [{
        label: 'AVERAGE',
        data: [38.1, 50.6, 37.6, 40.0],
        
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [
          'rgba(0, 119, 182, 1)'
        ]
      },
      {
        label: 'STRIKE RATE',
        data: [59.1, 87.6, 126.1, 135.6],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [        
          'rgba(0, 191, 142, 1)'
        ]
      }]    
    },
    options: {
      responsive: false,
      animation: {
        duration: 4500,
        easing: 'easeInOutCirc',
        loop: true
      }
    }
  });

  //chart6
  const chart6 = document.getElementById('50-100').getContext('2d');
  const century = new Chart(chart6, {
    type: 'line',
    data: {
      labels: ["TEST", "ODI", "T20", "IPL"],
      datasets: [{
        label: 'HALF CENTURIES',
        data: [33, 73, 2, 24],      
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [
          'rgba(0, 119, 182, 1)'
        ]
      },
      {
        label: 'CENTURIES',
        data: [6, 10, 0, 0],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)'
        ],
        borderColor: [        
          'rgba(0, 191, 142, 1)'
        ]
      }]    
    },
    options: {
      responsive: false,
      animation: {
        duration: 5000,
        easing: 'easeInOutCirc',
        loop: true
      }
    }
  });

  // chart7
  const chart7 = document.getElementById('run-scored').getContext('2d');
  const runScoredChart = new Chart(chart7, {
    type: 'doughnut',
    data: {
      labels: ["TEST RUNS", "ODI RUNS", "T20 RUNS", "IPL RUNS"],
      datasets: [{
        label: 'Run Scored',
        data: [4876, 10773, 1617, 4835],
        backgroundColor: [
          'rgba(0, 119, 182, 0.95)',
          'rgba(0, 191, 142, 0.95)',
          'rgba(247, 88, 66, 0.95)',        
          'rgba(247, 201, 75, 0.95)',
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3250,
        easing: 'easeInOutExpo',
        loop: true
      }
    }
  });

  // chart8
  const chart8 = document.getElementById('wicket-keeper').getContext('2d');
  const wicketKeeper = new Chart(chart8, {
    type: 'doughnut',
    data: {
      labels: ["CATCHES", "STUMPINGS","RUN OUTS"],
      datasets: [{
        label: 'WON',
        data: [762, 54, 234],
        backgroundColor: [        
          'rgba(0, 191, 142, 0.95)',
          'rgba(0, 119, 182, 0.95)',      
          'rgba(247, 201, 75, 0.95)'
        ]
      }]
    },
    options: {
      responsive: false,
      animation: {
        duration: 3200,
        easing: 'easeInOutExpo',
        loop: true
      }
    }
  });
} catch (e) {
  console.log(`Error caught in statistics: ${e}`);
}
//=======================================================================================
// // baba catch the errr of the console and log while implementing the loop holes of the show and the 
//biggest concern still remains to be te same as it was in the finale. ms dhoni finished nhi finisher hai
/// it is allso be





//HEADER-SECTION-PERSONALITIES-REVIEW
//variables
const personalitiesDots = Array.prototype.slice.call(document.getElementById("personalities-dots").children);
const personalitiesQuotes = Array.prototype.slice.call(document.getElementById("personalities-quotes").children);
const  personalitiesSpeed = 4500;
var currentSlide = 0;
var currentActive = 0;
var personalitiesTimer;

window.onload = function(){
function playSlide(slide){
  for (var k=0; k<personalitiesDots.length; k++){
    personalitiesQuotes[k].classList.remove("active");
    personalitiesQuotes[k].classList.remove("inactive");
    personalitiesDots[k].classList.remove("active");
  }
  if(slide < 0){
    slide = currentSlide = personalitiesQuotes.length - 1;
  }
  if(slide > personalitiesQuotes.length -1){
    slide = currentSlide = 0;
  }
  if(currentActive != currentSlide){
    personalitiesQuotes[currentActive].classList.add("inactive");
  }

  personalitiesQuotes[slide].classList.add("active");
  personalitiesDots[slide].classList.add("active");

  currentActive = currentSlide;
  clearTimeout(personalitiesTimer);
  personalitiesTimer = setTimeout(function () {
    playSlide(currentSlide += 1);
  }, personalitiesSpeed)
}
for (var l=0; l < personalitiesDots.length; l++) {
  personalitiesDots[l].addEventListener("click", function () {
    playSlide(currentSlide = personalitiesDots.indexOf(this));
  })
}
playSlide(currentSlide);
}
//=======================================================================================







// SCROLL ANIMATION
try {
  const scroll = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 100,
    reset: true
  });

  scroll.reveal(`.header-left-1`);
  scroll.reveal(`.header-left-2`, {delay: 250});
  scroll.reveal(`.section-heading`);
  scroll.reveal(`.nav`, {delay: 150});
  //   scroll.reveal(`.home`, {delay: 150});
  //   scroll.reveal(`.statistics`, {delay: 150});
  //   scroll.reveal(`.biography`, {delay: 150});
  //   scroll.reveal(`.awards`, {delay: 150});
  //   scroll.reveal(`.honours`, {delay: 150});
  // scroll.reveal(`.gallery`, {delay: 150});
  scroll.reveal(`.footer`, {delay: 150});

} catch (e) {
  console.log(`Error caught in scroll animation: ${e}`);
}

//=======================================================================================
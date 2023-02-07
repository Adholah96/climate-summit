// Hamburger menu
const menu = document.querySelector('.hamburger');
const windowMenu = document.querySelector('.window');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  windowMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-link').forEach((k) => k.addEventListener('click', () => {
  menu.classList.remove('active');
  windowMenu.classList.remove('active');
}));

// #load content dynamically

// 1.store values in an array

const cardArray = [
  {
    img: 'https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg',
    name: 'Adhola Heldricks',
    title: 'Ted Talk Enthuasist',
    description:
      'Give professional talks around the world about climate changes and its effects on third world nations, especialy in Africa.',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVxASP7dywthHPf5LICTwGvFmKLJCFZnF4h8QEG1pP8CbFbh1x15Cd5-j6zNIiAWz9H7g&usqp=CAU',
    name: 'Theophalus Daku',
    title: 'Climate columist',
    description:
      'climate and weather columnist at the one of the biggest african magazines that talks about environment, "AfroEnviro Paper."',
  },
  {
    img: 'https://www.justheadshots.photo/wp-content/uploads/2020/04/Dark-background-headshots-015.jpg',
    name: 'Akande Ashao',
    title: 'CNN reporter',
    description:
      'covers and features areas around africa for CNN. Akande focuses on coal mining in congo and its impacts to the Congo forest.',
  },
  {
    img: 'https://www.proheadshots.ca/wp-content/uploads/2016/03/vancouver-corporate-headshots-1.jpg',
    name: 'Hassan Kamau',
    title: 'Cabinet Secretary',
    description:
      'Hassan is the CS for Environment in South Africa. Hassan leads a fight against uncontrolled industralisation in the southern part of Africa.',
  },
  {
    img: 'https://pauliusmusteikis.com/wp-content/uploads/2018/11/business-headshot-of-man-1.jpg',
    name: 'Donald Clover',
    title: 'CEO, Climo-Africa',
    description:
      'started Climo-Africa in 2014 and within 9 years they have been able to create awareness and educated more than a 5 million people on global warming.',
  },
  {
    img: 'https://www.richardsphotography.com/wp-content/uploads/photo-gallery/imported_from_media_libray/Business-headshot-white-background-suit-and-tie-san-antonio-copy.jpg?bwg=1610738762',
    name: 'George Tsitati',
    title: 'Award winning author',
    description:
      'George has authored the book "Mounain Peaks" that talks about how the snow caps in mountains are slowly but surely affected by global warming',
  },
];

// 2. Load values using template method

const cardValues = document.getElementById('featured-speakers');
cardArray.forEach((data) => {
  let content = '<div class="featured-container">';
  content += '<div class="card1">';
  content += '<div class="image-container">';
  content += `<img class="image2" src="${data.img}" alt="speaker image">`;
  content += '</div>';
  content += '<div class="text-container">';
  content += `<h2>${data.name}</h2>`;
  content += `<p class="italic">${data.title}</p>`;
  content += '<div class="underline2">';
  content += '</div>';
  content += `<p>${data.description}</p>`;
  content += '</div>';
  content += '</div>';

  cardValues.innerHTML += content;
});

// display more functionality

const displayMore = document.getElementById('more-speaker');
const speakers = Array.from(document.querySelectorAll('.featured-container'));
speakers.forEach((card, val) => {
  if (val > 1) {
    card.classList.add('hide');
  }
});

const iconeBehaviour = (developer) => {
  if (developer.classList.contains('hide')) {
    displayMore.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  } else {
    displayMore.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  }
};
displayMore.addEventListener('click', () => {
  speakers.forEach((developer, val) => {
    if (val > 1) {
      developer.classList.toggle('hide');
      iconeBehaviour(developer);
    }
  });
});

const hamburger = document.querySelector('.material-icons');
const navbarItems = document.querySelector('.navbar-items');
const myLogo = document.querySelector('.logo');
const navbarItemLinks = document.querySelectorAll('.navbar-items li a');

function toggleMenu() {
  if (hamburger.textContent === 'menu') {
    hamburger.textContent = 'close';
    navbarItems.style.display = 'block';
    myLogo.style.visibility = 'hidden';
  } else {
    hamburger.textContent = 'menu';
    navbarItems.style.display = 'none';
    myLogo.style.visibility = 'visible';
  }
}

hamburger.addEventListener('click', () => {
  toggleMenu();
});

navbarItemLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

function reSize() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    navbarItems.style.display = 'none';
  }
  if (screenWidth > 768) {
    hamburger.textContent = 'menu';
    navbarItems.style.display = 'flex';
    myLogo.style.visibility = 'visible';
  }
}

window.addEventListener('resize', reSize);

// Popup-window

const projects = [
  {
    name: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    featuredImage: './img/main (1).png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project1-live-version.com',
    source: 'https://project1-source-code.com',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featuredImage: './img/grid-1.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project2-live-version.com',
    source: 'https://project2-source-code.com',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featuredImage: './img/grid-2.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project2-live-version.com',
    source: 'https://project2-source-code.com',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featuredImage: './img/grid-3.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project2-live-version.com',
    source: 'https://project2-source-code.com',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featuredImage: './img/grid-4.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project2-live-version.com',
    source: 'https://project2-source-code.com',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featuredImage: './img/grid-5.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project2-live-version.com',
    source: 'https://project2-source-code.com',
  },
  {
    name: 'Multi-Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    featuredImage: './img/grid-6.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://project2-live-version.com',
    source: 'https://project2-source-code.com',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const modalContainer = document.createElement('div');
  modalContainer.id = 'project-modal';
  modalContainer.classList.add('modal');

  const modelContent = document.createElement('div');
  modelContent.classList.add('modal-content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close');
  closeButton.innerHTML = '&times;';

  const modalDesc = document.createElement('div');
  modalDesc.classList.add('modal-desc');

  const modalTitle = document.createElement('h3');
  modalTitle.id = 'modal-title';
  modalTitle.classList.add('modal-h3');

  const modalStacks = document.createElement('ul');
  modalStacks.id = 'modal-stacks';
  modalStacks.classList.add('popup-tech');

  const modalImage = document.createElement('img');
  modalImage.id = 'modalImage';
  modalImage.classList.add('modal-img');

  const modalDescription = document.createElement('p');
  modalDescription.id = 'modal-description';
  modalDescription.classList.add('modal-p');

  const liveButton = document.createElement('button');
  liveButton.id = 'see-live';
  liveButton.classList.add('button');
  liveButton.type = 'button';

  const liveButtonContent = document.createElement('span');
  liveButtonContent.classList.add('button-content');
  liveButtonContent.innerHTML = 'See live';

  const liveButtonIcon = document.createElement('img');
  liveButtonIcon.src = './img/modal/icon-1.png';
  liveButtonIcon.alt = 'icon';
  liveButtonIcon.classList.add('icon');

  liveButtonContent.appendChild(liveButtonIcon);
  liveButton.appendChild(liveButtonContent);

  const sourceButton = document.createElement('button');
  sourceButton.id = 'see-sources';
  sourceButton.classList.add('button-two');
  sourceButton.type = 'button';

  const sourceButtonContent = document.createElement('span');
  sourceButtonContent.classList.add('button-content');
  sourceButtonContent.innerHTML = 'See Source';

  const sourceButtonIcon = document.createElement('img');
  sourceButtonIcon.src = './img/modal/icon-2.png';
  sourceButtonIcon.alt = 'icon';
  sourceButtonIcon.classList.add('icon');

  sourceButtonContent.appendChild(sourceButtonIcon);
  sourceButton.appendChild(sourceButtonContent);

  modalDesc.appendChild(modalTitle);
  modalDesc.appendChild(modalStacks);
  modalDesc.appendChild(modalImage);
  modalDesc.appendChild(modalDescription);
  modalDesc.appendChild(liveButton);
  modalDesc.appendChild(sourceButton);

  modelContent.appendChild(closeButton);
  modelContent.appendChild(modalDesc);

  modalContainer.appendChild(modelContent);

  document.body.appendChild(modalContainer);

  const projectOneButton = document.getElementById('project-one');
  const modal = document.getElementById('project-modal');
  const modalImg = document.getElementById('modalImage');
  const modalTit = document.getElementById('modal-title');
  const modalDes = document.getElementById('modal-description');
  const modalTechs = document.getElementById('modal-stacks');

  const { technologies } = projects[0];

  projectOneButton.addEventListener('click', () => {
    modalImg.src = projects[0].featuredImage;
    modalTit.textContent = projects[0].name;
    modalDes.textContent = projects[0].description;

    modalTechs.innerHTML = '';

    technologies.forEach((technology) => {
      const li = document.createElement('li');
      li.textContent = technology;
      modalTechs.appendChild(li);
    });

    modal.style.display = 'block';
  });

  const closeIt = document.getElementsByClassName('close')[0];
  closeIt.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Popup-grids
  const gridModalContainer = document.createElement('div');
  gridModalContainer.id = 'grid-modal';
  gridModalContainer.classList.add('items-modal');

  const gridmodelContent = document.createElement('div');
  gridmodelContent.classList.add('grid-content');
  gridmodelContent.id = 'grid-con';

  const gridCloseButton = document.createElement('span');
  gridCloseButton.classList.add('grid-close');
  gridCloseButton.innerHTML = '&times;';

  const itemDesc = document.createElement('div');
  itemDesc.classList.add('item-desc');

  const itemTitle = document.createElement('h3');
  itemTitle.id = 'item-title';
  itemTitle.classList.add('grid-modal-title');

  const itemStacks = document.createElement('ul');
  itemStacks.id = 'item-stacks';
  itemStacks.classList.add('popup-grid');

  const gridImage = document.createElement('img');
  gridImage.id = 'grid-image';
  gridImage.classList.add('grid-modal-img');

  const gridDesc = document.createElement('p');
  gridDesc.id = 'grid-desc';
  gridDesc.classList.add('grid-modal-p');

  const gridLiveButton = document.createElement('button');
  gridLiveButton.id = 'see-live';
  gridLiveButton.classList.add('button');

  const gridLiveContent = document.createElement('span');
  gridLiveContent.classList.add('button-content');
  gridLiveContent.innerHTML = 'See live';

  const gridLiveIcon = document.createElement('img');
  gridLiveIcon.src = './img/modal/icon-1.png';
  gridLiveIcon.alt = 'icon';
  gridLiveIcon.classList.add('icon');

  gridLiveContent.appendChild(gridLiveIcon);

  gridLiveButton.appendChild(gridLiveContent);

  const gridSourceButton = document.createElement('button');
  gridSourceButton.id = 'see-sources';
  gridSourceButton.classList.add('button-two');

  const sourceContent = document.createElement('span');
  sourceContent.classList.add('button-content');
  sourceContent.innerHTML = 'See Source';

  const sourceIcon = document.createElement('img');
  sourceIcon.src = './img/modal/icon-2.png';
  sourceIcon.alt = 'icon';
  sourceIcon.classList.add('icon');

  sourceContent.appendChild(sourceIcon);

  gridSourceButton.appendChild(sourceContent);

  itemDesc.appendChild(itemTitle);
  itemDesc.appendChild(itemStacks);
  itemDesc.appendChild(gridImage);
  itemDesc.appendChild(gridDesc);
  itemDesc.appendChild(gridLiveButton);
  itemDesc.appendChild(gridSourceButton);

  gridmodelContent.appendChild(gridCloseButton);
  gridmodelContent.appendChild(itemDesc);

  gridModalContainer.appendChild(gridmodelContent);

  document.body.appendChild(gridModalContainer);

  const gredModal = document.getElementById('grid-modal');
  const gredImg = document.getElementById('grid-image');
  const gredTitle = document.getElementById('item-title');
  const gredModalDesc = document.getElementById('grid-desc');
  const gredStacks = document.getElementById('item-stacks');

  const firstBtn = document.querySelector('.first-btn');

  firstBtn.addEventListener('click', () => {
    gredImg.src = projects[1].featuredImage;
    gredTitle.textContent = projects[1].name;
    gredModalDesc.textContent = projects[1].description;

    gredStacks.innerHTML = '';

    technologies.forEach((technology) => {
      const li = document.createElement('li');
      li.textContent = technology;
      gredStacks.appendChild(li);
    });

    gredModal.style.display = 'block';
  });

  const gridButton = document.getElementsByClassName('grid-close')[0];
  gridButton.addEventListener('click', () => {
    gredModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === gredModal) {
      gredModal.style.display = 'none';
    }
  });

  for (let i = 2; i <= 6; i += 1) {
    const gridNumber = i;
    const gridModalBtn = document.getElementById(`grid-${gridNumber}`);

    gridModalBtn.addEventListener('click', () => {
      gredImg.src = projects[i].featuredImage;
      gredTitle.textContent = projects[i].name;
      gredModalDesc.textContent = projects[1].description;

      gredStacks.innerHTML = '';

      technologies.forEach((technology) => {
        const li = document.createElement('li');
        li.textContent = technology;
        gredStacks.appendChild(li);
      });

      gredModal.style.display = 'block';
    });
  }
});

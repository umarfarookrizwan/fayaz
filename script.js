const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item-1');
            el.classList.remove('gallery-item-2');
            el.classList.remove('gallery-item-3');
            el.classList.remove('gallery-item-4');
            el.classList.remove('gallery-item-5');
        });
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`);
        });
    }

    setCurrentState(direction) {
        if (direction.className.includes('gallery-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());
        } else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            galleryControlsContainer.appendChild(button);
        });
    }

    useControl() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControl();
document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let closeDropdownTimeout;

    const showDropdown = () => {
      dropdown.classList.add('show');
      clearTimeout(closeDropdownTimeout);
    };

    const hideDropdown = () => {
      closeDropdownTimeout = setTimeout(() => {
        dropdown.classList.remove('show');
      }, 500); // Adjust delay in milliseconds (500ms = 0.3s)
    };

    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent navigation on click
      event.stopPropagation();
      dropdown.classList.toggle('show');
    });

    dropdownToggle.addEventListener('mouseenter', showDropdown);
    dropdownMenu.addEventListener('mouseenter', showDropdown);
    dropdown.addEventListener('mouseleave', hideDropdown);

    dropdownMenu.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('show');
    });
  });
  window.addEventListener('load', function() {
    var textOverlay = document.getElementById('text-overlay');
    textOverlay.classList.add('centered');
});
// dropdownMenu1
document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggle1 = document.querySelector('.dropdown-toggle1');
  const dropdown1 = document.querySelector('.dropdown1');
  const dropdownMenu1 = document.querySelector('.dropdown-menu1');
  let closeDropdownTimeout1;

  const showDropdown1 = () => {
    dropdown1.classList.add('show');
    clearTimeout(closeDropdownTimeout1);
  };

  const hideDropdown1 = () => {
    closeDropdownTimeout1 = setTimeout(() => {
      dropdown1.classList.remove('show');
    }, 5000); // Increased delay to 500ms
  };

  dropdownToggle1.addEventListener('mouseenter', showDropdown1);
  dropdownMenu1.addEventListener('mouseenter', showDropdown1);
  dropdown1.addEventListener('mouseenter', showDropdown1);

  dropdownToggle1.addEventListener('mouseleave', hideDropdown1);
  dropdownMenu1.addEventListener('mouseleave', hideDropdown1);
  dropdown1.addEventListener('mouseleave', hideDropdown1);

  dropdownToggle1.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent navigation on click
    event.stopPropagation();
    dropdown1.classList.toggle('show');
  });

  dropdownMenu1.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent dropdown from closing on clicking inside the menu
  });

  document.addEventListener('click', (event) => {
    if (!dropdown1.contains(event.target) && !dropdownToggle1.contains(event.target)) {
      dropdown1.classList.remove('show'); // Close dropdown if clicking outside
    }
  });
});

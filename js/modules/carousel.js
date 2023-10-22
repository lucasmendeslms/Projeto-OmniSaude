export function Carousel() {
  const buttonControls = document.querySelectorAll(".control");

  const galleryItems = {
    patients: Array.from(document.querySelectorAll("#patients .sectionItems")),
    news: Array.from(document.querySelectorAll("#news .sectionItems")),
  };

  const totalGalleryItems = {
    patients: galleryItems.patients.length,
    news: galleryItems.news.length,
  };

  buttonControls.forEach((button) => {
    button.addEventListener("click", () => {

      let currentItem;
      
      const currentGallery = button.getAttribute("data-gallery");

      const isLeftArrow = button.classList.contains("arrowLeft");

      for (const item of galleryItems[currentGallery]) {
        if (item.classList.contains("currentItem")) {
          currentItem = galleryItems[currentGallery].indexOf(item);
        }
      }

      if (isLeftArrow) {

        galleryItems[currentGallery][currentItem].classList.remove('currentItem');

        if (currentItem === 0) {
          currentItem = totalGalleryItems[currentGallery] - 1;
        } else {
          --currentItem;
        }
      }

      if (!isLeftArrow) {

        galleryItems[currentGallery][currentItem].classList.remove('currentItem');

        if (currentItem === totalGalleryItems[currentGallery] - 1) {
          currentItem = 0;
        } else {
          ++currentItem;
        }
      }

      galleryItems[currentGallery][currentItem].classList.add('currentItem');

      galleryItems[currentGallery][currentItem].scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

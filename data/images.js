// PHOTOS: replace the paths below with your real images.
// Put the files in /public/images and write them like "/images/breakfast.jpg".
// The first photo in each list is shown biggest where there is a mosaic.

export const PLACEHOLDER = "/images/placeholder.svg";
const fill = (n) => Array(n).fill(PLACEHOLDER);

export const IMAGES = {
  hero: ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg", "/images/hero9.jpg", "/images/hero6.jpg"], // hero background collage (3 photos)
  serve: fill(3), // service cards: breakfast, pastries, juices
  delices: ["/images/delices/Delice4.jpg", "/images/delices/Delice10.jpg",
    "/images/delices/Delice3.jpg",
    "/images/delices/Delice1.jpg",
    "/images/delices/Delice7.jpg",
    "/images/delices/Delice5.jpg",
    "/images/delices/Delice6.jpg"
  ], // "Nos délices" mosaic: photos taken by guests (7)
  maison: ["/images/hero1.jpg", "/images/hero2.jpg", "/images/hero3.jpg", "/images/hero4.jpg", "/images/hero5.jpg"], // "Notre maison": interior and exterior (5)
  visit: PLACEHOLDER, // photo next to the address
};

// Example:
// hero: ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"],

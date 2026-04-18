/**
 * Student testimonials data
 * 
 * Includes 6 hand-written text reviews, followed by dynamically imported screenshot reviews.
 */

// Dynamically import all images from the assets/images folder using Vite's import.meta.glob
const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });

const screenshotTestimonials = Object.values(imageModules).map((imgSrc, index) => ({
  name: `Screenshot ${index + 1} (${index % 2 === 0 ? "Top" : "Bottom"})`,
  type: "screenshot",
  imgSrc: imgSrc,
  imgAlt: "تقييم طالب"
}));

export const TESTIMONIALS = Object.freeze([
  ...screenshotTestimonials
]);


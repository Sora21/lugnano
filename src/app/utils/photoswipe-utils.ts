import PhotoSwipe from "photoswipe";
import PhotoSwipeLightbox from "photoswipe/lightbox";

export function createPhotoswipeLightBox(galleryName: string) {
    return new PhotoSwipeLightbox({
        bgOpacity: 0.3,
        gallery: '#' + galleryName,
        children: 'a',
        pswpModule: PhotoSwipe,
    });
}
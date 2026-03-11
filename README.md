# Photo Site

This is a static photo gallery site that is currently deployed on Github Pages but could just as easily be deployed as, for example, a static NGINX site.

## Adding Images

Images are stored and displayed from subfolders that represent gallery collections. For each image, add the full-size image to the `images` folder and a thumbnail to the `thumbs` folder. The same filename may be used for both for simplicity.

|                 | Folder   | Recommended Dimensions          |
| --------------- | -------- | ------------------------------- |
| Thumbnail       | `thumbs` | 200px tall                      |
| Full-Size Image | `images` | 3000px in the largest dimension |

Images must be manually added to the gallery collection's `index.html`. Under `<div class="gallery" id="gallery">`, add an `<a>` block for each image:

```html
<a
  href="images/{image-filename}.jpg"
  data-pswp-width="{pixel-width}"
  data-pswp-height="{pixel-height}"
  target="_blank"
>
  <img src="thumbs/{thumbnail-filename}.jpg" alt="" />
</a>
```

where `{pixel-width}` and `{pixel-height}` are the width and height of the full-sized `{image-filename}.jpg` in pixels, but written just as a unitless integer number, e.g., `data-pswp-width="3000"`.

The gallery collection will display image thumbnails in the order listed in `index.html`. So for reverse chronological order (newest images at the top), add the most recent images to the top of the list.

## Adding, Removing, and Renaming Gallery Collections

Gallery collections are subfolders that contain an `index.html`, an `images` folder, and a `thumbs` folder. The gallery collection folder can be given any useful, short name. These gallery collections are accessed by users from the website navigation bar, which must be manually edited in `header.js` if adding or removing gallery collections. The collection name displayed in the nav bar is controlled in `header.js`, and the title text displayed when viewing a gallery collection is controlled in the collection's `index.html`.

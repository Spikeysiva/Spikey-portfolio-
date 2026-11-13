# Images

## Hero portrait (required)

Put your portrait here, named exactly:

```
public/images/spikey-hero.webp
```

It's used in the hero and the About section. It's shown with `object-fit: contain` at its original proportions (never cropped or stretched), on a black frame that matches the photo's black background.

Until the file exists, the site shows a clearly labelled "Portrait goes here" slot instead of a broken image.

## Project images (optional)

Put project images in `public/images/work/` and list them in `src/data/projects.ts`:

```ts
images: ['images/work/pop-bloom-01.webp', 'images/work/pop-bloom-02.webp'],
```

The first image becomes the card cover and the hero of the project page. The rest become the gallery. Once a project has images, its placeholder artwork and "Placeholder" badge go away.

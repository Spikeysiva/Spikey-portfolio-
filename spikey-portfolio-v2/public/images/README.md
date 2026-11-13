# Images

## Portrait (required)

Put your portrait here, named exactly:

```
public/images/spikey-hero.webp
```

It appears in the About section ("A Little About Me"), shown with `object-fit: contain` at its original proportions (never cropped or stretched). The homepage hero is now typographic, with a hand-drawn doodle instead of a photo.

Until the file exists, the About section shows a clearly labelled "Your portrait here" slot instead of a broken image.

## Project images (optional)

Put project images in `public/images/work/` and list them in `src/data/projects.ts`:

```ts
images: ['images/work/pop-bloom-01.webp', 'images/work/pop-bloom-02.webp'],
```

The first image becomes the card cover and the hero of the project page. The rest become the gallery. Once a project has images, its placeholder artwork and "Placeholder" badge go away.

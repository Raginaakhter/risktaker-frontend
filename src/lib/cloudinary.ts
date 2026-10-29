const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'yxd0ryxx';
const BASE = `https://res.cloudinary.com/${CLOUD}`;
const FOLDER = 'risktaker-2000';

type ImgOpts = {
  w?: number;
  h?: number;
  q?: number | 'auto';
  crop?: 'fill' | 'fit' | 'scale' | 'thumb';
};

export function cldImg(publicId: string, opts: ImgOpts = {}): string {
  const t: string[] = ['f_auto'];
  t.push(`q_${opts.q ?? 'auto'}`);
  if (opts.w) t.push(`w_${opts.w}`);
  if (opts.h) t.push(`h_${opts.h}`);
  if (opts.crop) t.push(`c_${opts.crop}`);
  return `${BASE}/image/upload/${t.join(',')}/${FOLDER}/${publicId}`;
}

export const CLD = {
  logo: cldImg('logo', { w: 480 }),
  slide1: cldImg('slides/slide-1', { w: 1920 }),
  summit: cldImg('slides/difference-summit', { w: 1920 })
};

export const heroSlides: string[] = ['0', '01', '02', '03', '04'].map((n) =>
  cldImg(`slide/${n}`, { w: 1920 })
);

export const summitCarousel: string[] = Array.from({ length: 11 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return cldImg(`summit-carousel/${n}`, { w: 1600 });
});

export const galleryImages: string[] = Array.from({ length: 5 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return cldImg(`gallery/${n}`, { w: 1200 });
});

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'به‌نوبه',
    short_name: 'به‌نوبه',
    description: 'سامانه جامع خدمات آنلاین پزشکی و درمانی',
    start_url: '/',
    display: 'standalone',
    background_color: '#F0F8FF',
    theme_color: '#2E86C1',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}

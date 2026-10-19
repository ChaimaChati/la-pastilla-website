/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site: `npm run build` creates the /out folder
  images: { unoptimized: true },
};

export default nextConfig;

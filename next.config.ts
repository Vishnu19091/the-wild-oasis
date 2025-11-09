import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /*The below configuration is done,
  because the app tries to load an image which has got from a URL */
  images: {
    remotePatterns: [
      new URL(
        "https://xmjepigexebjqwsvdmvn.supabase.co/storage/v1/object/public/cabins-images/**"
      ),
    ],
  },
  // This allows to generate static site
  // output: "export",
};

export default nextConfig;

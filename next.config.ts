import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader:false,
  experimental:{optimizePackageImports:["@vercel/analytics","@vercel/speed-insights"]},
  async headers(){return [{source:"/(.*)",headers:[
    {key:"X-Content-Type-Options",value:"nosniff"},
    {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
    {key:"Permissions-Policy",value:"camera=(), microphone=(), geolocation=()"},
    {key:"X-Frame-Options",value:"DENY"}
  ]}]}
};
export default nextConfig;
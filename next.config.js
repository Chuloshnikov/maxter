/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co", "images.pexels.com", "lh3.googleusercontent.com", "res.cloudinary.com"],
  },
  env: {
    API_URL: "http://localhost:3000",
    MONGODB_URI: "mongodb+srv://admin:chicago1947@cluster0.0vaddio.mongodb.net/?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig

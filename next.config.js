/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  API_URL: process.env.API_URL ? process.env.API_URL : 'http://localhost:3000',
}

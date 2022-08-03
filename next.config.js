module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/static",
        permanent: true,
      }
    ]
  }
}
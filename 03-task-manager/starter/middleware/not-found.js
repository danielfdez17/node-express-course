const notFound = (req, res) => {
  res
    .status(404)
    .status(404).send('Route does not exist')
}

module.exports = notFound

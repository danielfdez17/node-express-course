const getAllProductsStatic = async (req, res) => {
  throw new Error('testing async error')
  // res
  //   .status(200)
  //   .json({ msg: 'get all products static' })
}

const getAllProducts = async (req, res) => {
  res
    .status(200)
    .json({ msg: 'get all products' })
}

module.exports = {
  getAllProductsStatic,
  getAllProducts
}

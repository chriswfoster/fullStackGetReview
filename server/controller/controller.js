const getUsers = (req, res) => {
  const dbInstance = req.app.get("db")
  // can destructure bodies here
  // const {destructuring, from} = req.body
  //can pass in params, querys, or bodys
  dbInstance.get_all_items().then(response => { res.status(200).json(response)})
}

module.exports = {
  getUsers
}

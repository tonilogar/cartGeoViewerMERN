const userCtrl = {};


userCtrl.getUsers = (req, res) => res.json({message: 'Users routes'})

userCtrl.createUser = (req, res) => res.json({message: 'User created'})

userCtrl.deleteUser = (req, res) => res.json({message: 'User deleted'})

module.exports = userCtrl;
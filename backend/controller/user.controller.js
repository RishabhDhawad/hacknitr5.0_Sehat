const UserService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { phone } = req.body;
    const successRes = await UserService.registerUser(phone);
    return res.status(200).send({
      status: true,
      success: `user Registered succesfully ${phone}`,
      otp: `${successRes["otp"]}`,
      hashk: `${successRes["hash"]}`,
    });
  } catch (error) {
    throw error;
  }
};

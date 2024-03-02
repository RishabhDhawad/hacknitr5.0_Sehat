const UserModel = require("../model/user.model");
const otpGenerator = require("otp-generator");
const crypto = require("crypto");
const key = "otp-secret-key";

async function registerUser(phone, callback) {
  const otp = otpGenerator.generate(4, {
    digits: true,
    // alphabets: false,
    // upperCase: false,
    upperCaseAlphabets: false,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  const ttl = 5 * 60 * 1000;
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = crypto.createHmac("sha256", key).update(data).digest("hex");
  const fullHash = `${hash}.${expires}`;
  console.log(`your otp is ${otp}`);

  hashk = fullHash;
  try {
    if (!phone) {
      throw new Error("PHONE NUMBER REQUIRED");
    }

    const existuser = await UserModel.findOneAndUpdate(
      { phone },
      { $set: { ["hash"]: hashk } },
      { new: true }
    );
    console.log("updatedUsr");

    console.log(existuser);
    if (existuser == null) {
      const createUser = new UserModel({ phone, hashk });
      console.log("create user UserModel ----");
      console.log(createUser);
      const ret = await createUser.save();
      console.log(ret);
    }

    const result = {
      hash: hashk,
      otp: otp,
    };
    return await result;
  } catch (err) {
    throw err;
  }
}

const model = require("./model");
const { verify } = require("../lib/jwt");

module.exports = {
  auth: async (req, res, next) => {
    try {
      const { token } = req.headers;
      const { clientId } = verify(token);
      if (!clientId) return res.status(400).json({ message: "Bad request" });

      const client = await model.user(clientId);
      if (client) {
        next();
      } else {
        res.status(400).json({ message: "Bad request" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ message: "Bad request" });
    }
  },
};

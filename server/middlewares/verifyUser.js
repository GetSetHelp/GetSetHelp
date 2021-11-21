const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

async function verifyUser(req, res, next) {
  const ticket = await client.verifyIdToken({
      idToken: req.body.id_token,
      audience: process.env.CLIENT_ID,
  });
    const payload = ticket.getPayload();
    req.payload = payload;
    next();
}

module.exports = verifyUser;

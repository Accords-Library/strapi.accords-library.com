module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b7570ef6a700c64483c58ca224d87f7'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '2Aw/HRoKBtolbCYat2f2GA=='),
    },
  },
});

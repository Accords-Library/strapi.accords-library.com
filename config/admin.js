module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b7570ef6a700c64483c58ca224d87f7'),
  },
});

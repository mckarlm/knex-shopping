
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          email: 'eldena@therabbithole.com',
          password: 'thebestest'
        },
        {
          id: 2,
          email: 'ixia@olympia.com',
          password: 'allthemoney'
        },
        {
          id: 3,
          email: 'ayariandroark@nlamira.com',
          password: 'twinsies'
        }
      ]);
    });
};

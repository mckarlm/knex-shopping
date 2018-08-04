
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          title: 'iron ore',
          description: 'common and inexpensive ore',
          inventory: 10,
          price: 5.22,
        },
        {
          id: 3,
          title: 'steel bar',
          description: 'bar made from smelting iron and coal together. tougher than iron',
          inventory: 7,
          price: 12.05,
        },
        {
          id: 2,
          title: 'rune shield',
          description: 'heavy kiteshield made from an extremely rare ore',
          inventory: 1,
          price: 199.32,
        }
      ]);
    });
};

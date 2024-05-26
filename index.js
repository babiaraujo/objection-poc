// index.js
const knex = require('./db');
const User = require('./models/User');

async function main() {
  await User.query().delete();

  const newUser = await User.query().insert({
    name: 'babi',
    email: 'babi3@example.com'
  });

  console.log('User created:', newUser);

  const users = await User.query();
  console.log('All users:', users);

  const updatedUser = await User.query().patchAndFetchById(newUser.id, {
    name: 'Jane Doe'
  });
  console.log('User updated:', updatedUser);

  await User.query().deleteById(newUser.id);
  console.log('User deleted');
}

main().catch(err => {
  console.error(err);
}).finally(() => {
  knex.destroy();
});

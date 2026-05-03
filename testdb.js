require('dotenv').config({ path: '.env.local' });
require('ts-node').register();
const { getPool, isDbConnected } = require('./app/lib/db.ts');

async function test() {
  const isConnected = await isDbConnected();
  console.log("DB Connected?", isConnected);
  if (isConnected) {
    const { rows } = await getPool().query('SELECT id, name FROM "Vessel" LIMIT 5');
    console.log(rows);
  }
}
test().catch(console.error).finally(() => process.exit(0));

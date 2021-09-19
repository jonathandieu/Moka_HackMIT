import * as fs from "fs";

module.exports = {
  type: "cockroachdb",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  username: "jon",
  password: "fQaiZ238V88VeOl0",
  database: "hungry-mantis-3463.vault",
  ssl: {
     ca: fs.readFileSync('/home/jonathanhuydieu/.postgresql/root.crt').toString()
   },
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/migration",
    subscribersDir: "src/subscriber",
  },
};

import * as fs from "fs";

module.exports = {
  type: "",
  host: "",
  port: 26257,
  username: "",
  password: "",
  database: "",
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

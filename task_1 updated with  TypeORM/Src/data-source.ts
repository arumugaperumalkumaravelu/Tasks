import { DataSource } from "typeorm";
import "reflect-metadata";

export const AppDataSource  = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "peru123",
    database: "simpletodo",
    entities: ["src/Entity/*.ts"],
})


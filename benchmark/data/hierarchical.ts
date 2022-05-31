import { RandomGenerator } from "../internal/RandomGenerator";
import { ICustomer } from "../structures/ICustomer";

export const hierarchical: () => ICustomer = () => ({
    id: RandomGenerator.number(),
    channel: {
        id: RandomGenerator.number(),
        code: RandomGenerator.string(),
        name: RandomGenerator.string(),
        sequence: RandomGenerator.number(),
        exclusive: RandomGenerator.boolean(),
    },
    member: {
        id: RandomGenerator.number(),
        account: {
            id: RandomGenerator.number(),
            code: RandomGenerator.string(),
            created_at: new Date().toString(),
        },
        emails: ["samchon.github@gmail.com", "samchon@archisketch.com"],
        created_at: new Date().toString(),
    },
    href: "https://github.com/samchon/typescript-json/blob/master/benchmark/data/recursive.ts",
    referrer: "https://github.com/samchon/typescript-json",
    ip: "127.0.0.1",
    created_at: new Date().toString(),
});

import { RandomGenerator } from "../internal/RandomGenerator";
import { ICustomer } from "../structures/ICustomer";
import { ITimestamp } from "../structures/ITimestamp";

export const hierarchical: () => ICustomer = () => ({
    id: RandomGenerator.number(),
    channel: {
        id: RandomGenerator.number(),
        code: RandomGenerator.string(),
        name: RandomGenerator.string(),
        sequence: RandomGenerator.number(),
        exclusive: RandomGenerator.boolean(),
        priority: RandomGenerator.number(),
        created_at: timestamp(),
    },
    member: {
        id: RandomGenerator.number(),
        account: {
            id: RandomGenerator.number(),
            code: RandomGenerator.string(),
            created_at: timestamp(),
        },
        emails: ["samchon.github@gmail.com", "samchon@archisketch.com"],
        created_at: timestamp(),
        authorized: true,
    },
    href: "https://github.com/samchon/typescript-json/blob/master/benchmark/data/recursive.ts",
    referrer: "https://github.com/samchon/typescript-json",
    ip: [127, 0, 0, 1],
    created_at: timestamp(),
});

const timestamp: () => ITimestamp = () => ({
    time: Date.now(),
    zone: new Date().getTimezoneOffset(),
});

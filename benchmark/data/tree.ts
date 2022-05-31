import { RandomGenerator } from "../internal/RandomGenerator";
import { ICategory } from "../structures/ICategory";

export const tree: () => ICategory = () => generate(0);

const generate: (level: number) => ICategory = (level) => ({
    id: RandomGenerator.number(),
    code: RandomGenerator.string(),
    name: RandomGenerator.string(),
    sequence: RandomGenerator.number(),
    children: ++level !== 5 ? RandomGenerator.array(() => generate(level)) : [],
});

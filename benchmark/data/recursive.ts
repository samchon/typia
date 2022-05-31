import { RandomGenerator } from "../internal/RandomGenerator";
import { ICategory } from "../structures/ICategory";

export const recursive: () => ICategory.IInvert = () => generate(0);

const generate: (level: number) => ICategory.IInvert = (level) => ({
    id: RandomGenerator.number(),
    code: RandomGenerator.string(),
    name: RandomGenerator.string(),
    sequence: RandomGenerator.number(),
    parent: level++ !== 10 ? generate(level) : null,
});

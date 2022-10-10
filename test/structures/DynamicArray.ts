import { RandomGenerator } from "../internal/RandomGenerator";

export interface DynamicArray {
    [key: string]: string[];
}
export namespace DynamicArray {
    export function generate(): DynamicArray {
        const output: DynamicArray = {};
        for (let i: number = 0; i < 10; ++i) {
            const key: string = RandomGenerator.string();
            output[key] = RandomGenerator.array(RandomGenerator.string);
        }
        return output;
    }
}

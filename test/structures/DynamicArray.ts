import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export interface DynamicArray {
    [key: string]: string[];
}
export namespace DynamicArray {
    export function generate(): DynamicArray {
        const output: DynamicArray = {};
        for (let i: number = 0; i < 10; ++i) {
            const key: string = TestRandomGenerator.string();
            output[key] = TestRandomGenerator.array(TestRandomGenerator.string);
        }
        return output;
    }
    export const SPOILERS: Spoiler<DynamicArray>[] = [
        (input) => {
            input["something"] = [0] as any;
            input["another"] = [false] as any;
            return [`$input.something[0]`, `$input.another[0]`];
        },
    ];
    export const ADDABLE = false;
}

import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ClassMethod = ClassMethod.Animal;
export namespace ClassMethod {
    export const PRIMITIVE = false;

    export class Animal {
        public constructor(public readonly name: string, age: number) {
            this.age = age;
        }
        public readonly age: number;

        public bark(): string {
            return RandomGenerator.string();
        }
    }

    export function generate(): ClassMethod {
        return new Animal(RandomGenerator.string(), RandomGenerator.integer());
    }

    export const SPOILERS: Spoiler<ClassMethod>[] = [
        (input) => {
            (input as any).name = [];
            return ["$input.name"];
        },
        (input) => {
            (input as any).age = () => 3;
            return ["$input.age"];
        },
    ];
}

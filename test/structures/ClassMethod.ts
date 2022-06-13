import { RandomGenerator } from "../internal/RandomGenerator";

export type ClassMethod = ClassMethod.Animal;
export namespace ClassMethod {
    export class Animal {
        public constructor(public readonly name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        public readonly age: number;

        public bark(): string {
            return RandomGenerator.string();
        }
    }

    export function generate(): ClassMethod {
        return new Animal(RandomGenerator.string(), RandomGenerator.number());
    }
}

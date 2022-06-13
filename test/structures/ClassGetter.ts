import { RandomGenerator } from "../internal/RandomGenerator";

export type ClassGetter = ClassGetter.Person;
export namespace ClassGetter {
    export class Person {
        public constructor(
            public readonly id: string,
            public readonly name: string,
            dead: boolean | null,
        ) {
            this.dead = dead;
        }
        public readonly dead: boolean | null;

        public get greeting(): string {
            return `Hello ${this.name}, nice to meet you.`;
        }
    }

    export function generate(): ClassGetter {
        return new Person(
            RandomGenerator.string(),
            RandomGenerator.string(),
            Math.random() < 0.5 ? RandomGenerator.boolean() : null,
        );
    }
}

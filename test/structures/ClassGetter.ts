import { Spoiler } from "../helpers/Spoiler";
import { TestRandomGenerator } from "../helpers/TestRandomGenerator";

export type ClassGetter = ClassGetter.Person;
export namespace ClassGetter {
    export const PRIMITIVE = false;

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
            TestRandomGenerator.string(),
            TestRandomGenerator.string(),
            Math.random() < 0.5 ? TestRandomGenerator.boolean() : null,
        );
    }

    export const SPOILERS: Spoiler<ClassGetter>[] = [
        (input) => {
            (input as any).id = 3;
            return ["$input.id"];
        },
        (input) => {
            (input as any).name = null;
            return ["$input.name"];
        },
        (input) => {
            (input as any).dead = "alive";
            return ["$input.dead"];
        },
    ];
}

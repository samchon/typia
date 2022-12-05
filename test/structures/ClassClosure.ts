import { RandomGenerator } from "../internal/RandomGenerator";
import { Spoiler } from "../internal/Spoiler";

export type ClassClosure = ClassClosure.Something;
export namespace ClassClosure {
    export const PRIMITIVE = false;

    export class Something {
        public constructor(public readonly id: string) {}
        public readonly type: "something" = "something" as const;
        public readonly closure: () => string = () => `${this.type}:${this.id}`;
    }

    export function generate(): ClassClosure {
        return new Something(RandomGenerator.string());
    }

    export const SPOILERS: Spoiler<ClassClosure>[] = [
        (input) => {
            (input as any).id = 3;
            return ["$input.id"];
        },
        (input) => {
            (input as any).type = null;
            return ["$input.type"];
        },
        (input) => {
            (input as any).closure = null;
            return ["$input.closure"];
        },
    ];
}

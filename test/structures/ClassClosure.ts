import { RandomGenerator } from "../internal/RandomGenerator";

export type ClassClosure = ClassClosure.Something;
export namespace ClassClosure {
    export class Something {
        public constructor(public readonly id: string) {}
        public readonly type: "something" = "something";
        public readonly closure: () => string = () => `${this.type}:${this.id}`;
    }

    export function generate(): ClassClosure {
        return new Something(RandomGenerator.string());
    }
}

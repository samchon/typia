import { RandomGenerator } from "../internal/RandomGenerator";

export type ClassPublic = ClassPublic.Accessor;
export namespace ClassPublic {
    export class Accessor {
        public constructor(
            readonly implicit: string,
            public readonly shown: string,
            protected readonly heritage: number,
            private readonly hidden: boolean,
        ) {}
        public static readonly CONSTANT: string = "some constant value";

        public getHiden(): boolean {
            return this.hidden;
        }
    }

    export function generate(): ClassPublic {
        return new Accessor(
            RandomGenerator.string(),
            RandomGenerator.string(),
            RandomGenerator.number(),
            RandomGenerator.boolean(),
        );
    }
}

import { RandomGenerator } from "../internal/RandomGenerator";

export type ClassNonPublic = ClassNonPublic.Accessor;
export namespace ClassNonPublic {
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

    export function generate(): ClassNonPublic {
        return new Accessor(
            RandomGenerator.string(),
            RandomGenerator.string(),
            RandomGenerator.number(),
            RandomGenerator.boolean(),
        );
    }
}

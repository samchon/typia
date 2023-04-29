import { Spoiler } from "../helpers/Spoiler";

export type TupleOptional = Array<
    [
        number,
        boolean,
        string,
        (number | undefined | null)?,
        (string | undefined | null)?,
    ]
>;
export namespace TupleOptional {
    export function generate(): TupleOptional {
        return [
            [0, true, "two", 3, "four"],
            [0, true, "two", 3],
            [0, true, "two"],
            [0, true, "two", undefined],
            [0, true, "two", 3, undefined],
            [0, true, "two", undefined, "four"],
        ];
    }

    export const SPOILERS: Spoiler<TupleOptional>[] = [
        (input) => {
            input[0][0] = false as any;
            return ["$input[0][0]"];
        },
        (input) => {
            input[0] = [0, false] as any;
            return ["$input[0]"];
        },
        (input) => {
            input[0] = [0, false, "two", 3, "four", 5] as any;
            return ["$input[0]"];
        },
        ...[0, 1, 2].map((i) => (input: TupleOptional) => {
            input[0][i] = undefined!;
            return [`$input[0][${i}]`];
        }),
    ];

    export const JSONABLE = false;
}

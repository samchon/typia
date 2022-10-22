import { Spoiler } from "../internal/Spoiler";

export type AtomicClass = AtomicClass.Class[];
export namespace AtomicClass {
    export type Class = Boolean | Number | String;
    export function generate(): AtomicClass {
        return [
            new Boolean(false),
            new Boolean(true),
            new Number(1),
            new String("abcd"),
        ];
    }
    export const SPOILERS: Spoiler<AtomicClass>[] = [
        (input) => {
            input[0] = null!;
            return ["$input[0]"];
        },
        (input) => {
            input[1] = undefined!;
            return ["$input[1]"];
        },
        (input) => {
            input[2] = {} as any;
            return ["$input[2]"];
        },
        (input) => {
            input[3] = [] as any;
            return ["$input[3]"];
        },
    ];
}

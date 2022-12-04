import { Spoiler } from "../internal/Spoiler";

export interface FunctionalProperty {
    name: string;
    closure: (value: number) => boolean;
}
export namespace FunctionalProperty {
    export const PRIMITIVE = false;

    export function generate(): FunctionalProperty {
        return {
            name: "name",
            closure: (value) => !!value,
        };
    }

    export const SPOILERS: Spoiler<FunctionalProperty>[] = [
        (input) => {
            input.name = 3 as any;
            return ["$input.name"];
        },
        (input) => {
            input.closure = "function" as any;
            return ["$input.closure"];
        },
        (input) => {
            input.closure = null!;
            return ["$input.closure"];
        },
        (input) => {
            input.closure = undefined!;
            return ["$input.closure"];
        },
        (input) => {
            input.closure = {} as any;
            return ["$input.closure"];
        },
        (input) => {
            input.closure = [] as any;
            return ["$input.closure"];
        },
    ];
}

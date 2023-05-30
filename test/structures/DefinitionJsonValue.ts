import { Spoiler } from "../helpers/Spoiler";

export type DefinitionJsonValue = DefinitionJsonValue.JsonValue;
export namespace DefinitionJsonValue {
    export type JsonValue =
        | string
        | number
        | boolean
        | JsonObject
        | JsonArray
        | null;
    export interface JsonObject {
        [key: string]: JsonValue | undefined;
    }
    export type JsonArray = Array<JsonValue>;

    export function generate(): DefinitionJsonValue {
        return [
            "string",
            123,
            true,
            {
                string: "string",
                number: 123,
                array: [
                    "string",
                    1,
                    2,
                    {
                        key: "anything",
                    },
                ],
            },
            [1, 2, { key: "value" }, false, null],
        ];
    }

    export const SPOILERS: Spoiler<DefinitionJsonValue>[] = [
        (input) => {
            (input as JsonArray)[0] = BigInt(3) as any;
            return ["$input[0]"];
        },
        (input) => {
            (input as JsonArray).push(undefined!);
            return ["$input[5]"];
        },
    ];
    export const ADDABLE: boolean = false;
}

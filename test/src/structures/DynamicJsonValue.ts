import { Spoiler } from "../helpers/Spoiler";

export type DynamicJsonValue = DynamicJsonValue.JsonValue;
export namespace DynamicJsonValue {
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
  export interface JsonArray extends Array<JsonValue> {}

  export function generate(): DynamicJsonValue {
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

  export const SPOILERS: Spoiler<DynamicJsonValue>[] = [
    (input) => {
      (input as JsonArray)[0] = BigInt(0) as any;
      return ["$input[0]"];
    },
    (input) => {
      (input as JsonArray).push(undefined!);
      return ["$input[5]"];
    },
  ];
  export const ADDABLE: boolean = false;
  export const BINARABLE = false;
  export const JSONABLE: boolean = false;
}

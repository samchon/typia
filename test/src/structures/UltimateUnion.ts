import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { ArrayRecursiveUnionExplicit } from "./ArrayRecursiveUnionExplicit";
import { ObjectUnionExplicit } from "./ObjectUnionExplicit";
import { ObjectUnionImplicit } from "./ObjectUnionImplicit";

export type UltimateUnion = typia.IJsonApplication[];
export namespace UltimateUnion {
  export const RECURSIVE = true;

  export function generate(): typia.IJsonApplication[] {
    const output = [
      typia.json.application<[ObjectUnionExplicit]>(),
      typia.json.application<[ObjectUnionImplicit]>(),
      typia.json.application<[ArrayRecursiveUnionExplicit]>(),
    ];
    output[0]!.schemas[0] = {
      type: "number",
    };
    return output;
  }

  export function trail(): typia.IJsonApplication[] {
    const input: typia.IJsonApplication[] = generate();
    SPOILERS[0]!(input);
    return input;
  }

  export const SPOILERS: Spoiler<typia.IJsonApplication[]>[] = [
    (input) => {
      const [key, schema] = (() => {
        const entries = Object.entries(
          input[input.length - 1]!.components.schemas!,
        );
        return entries[entries.length - 1]!;
      })();
      (schema as any).properties["sdafasdfsda"] = {
        oneOf: {} as any,
      };
      return [
        `$input[${
          input.length - 1
        }].components.schemas["${key}"].properties.sdafasdfsda.oneOf`,
      ];
    },
  ];

  export const ADDABLE = false;
  export const BINARABLE = false;
  export const RANDOM = false;
}

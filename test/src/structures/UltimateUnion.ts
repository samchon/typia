import typia from "typia";

import { Spoiler } from "../helpers/Spoiler";
import { ArrayRecursiveUnionExplicit } from "./ArrayRecursiveUnionExplicit";
import { ObjectUnionExplicit } from "./ObjectUnionExplicit";
import { ObjectUnionImplicit } from "./ObjectUnionImplicit";

export type UltimateUnion = typia.IJsonSchemaCollection[];
export namespace UltimateUnion {
  export const RECURSIVE = true;

  export function generate(): typia.IJsonSchemaCollection[] {
    const output = [
      typia.json.schemas<[ObjectUnionExplicit]>(),
      typia.json.schemas<[ObjectUnionImplicit]>(),
      typia.json.schemas<[ArrayRecursiveUnionExplicit]>(),
    ];
    output[0]!.schemas[0] = {
      type: "number",
    };
    return output;
  }

  export function trail(): typia.IJsonSchemaCollection[] {
    const input: typia.IJsonSchemaCollection[] = generate();
    SPOILERS[0]!(input);
    return input;
  }

  export const SPOILERS: Spoiler<typia.IJsonSchemaCollection[]>[] = [
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

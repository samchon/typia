import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_isStringify_ObjectPartialAndRequired =
  _test_json_isStringify("ObjectPartialAndRequired")<ObjectPartialAndRequired>(
    ObjectPartialAndRequired,
  )((input) =>
    ((input: ObjectPartialAndRequired): string | null => {
      const is = (input: any): input is ObjectPartialAndRequired => {
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number ||
            ("number" === typeof input.number &&
              Number.isFinite(input.number))) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every(
            (elem: any) => "number" === typeof elem && Number.isFinite(elem),
          );
        return "object" === typeof input && null !== input && $io0(input);
      };
      const stringify = (input: ObjectPartialAndRequired): string => {
        const $io0 = (input: any): boolean =>
          (undefined === input.string || "string" === typeof input.string) &&
          (undefined === input.number || "number" === typeof input.number) &&
          (undefined === input.boolean || "boolean" === typeof input.boolean) &&
          (null === input.object ||
            ("object" === typeof input.object &&
              null !== input.object &&
              $io0(input.object))) &&
          Array.isArray(input.array) &&
          input.array.every((elem: any) => "number" === typeof elem);
        const $string = (typia.json.isStringify as any).string;
        const $number = (typia.json.isStringify as any).number;
        const $so0 = (input: any): any =>
          `{${undefined === input.string ? "" : `"string":${undefined !== input.string ? $string(input.string) : undefined},`}${undefined === input.number ? "" : `"number":${undefined !== input.number ? $number(input.number) : undefined},`}${undefined === input.boolean ? "" : `"boolean":${undefined !== input.boolean ? input.boolean : undefined},`}"object":${null !== input.object ? $so0(input.object) : "null"},"array":${`[${input.array.map((elem: any) => $number(elem)).join(",")}]`}}`;
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    })(input),
  );

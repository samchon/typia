import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_isStringify_ObjectAlias = _test_json_isStringify(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input) =>
  ((input: ObjectAlias): string | null => {
    const is = (input: any): input is ObjectAlias => {
      const $io0 = (input: any): boolean =>
        (null === input.id || "string" === typeof input.id) &&
        "string" === typeof input.email &&
        "string" === typeof input.name &&
        (null === input.sex ||
          2 === input.sex ||
          1 === input.sex ||
          "male" === input.sex ||
          "female" === input.sex) &&
        (null === input.age ||
          ("number" === typeof input.age && Number.isFinite(input.age))) &&
        (null === input.dead || "boolean" === typeof input.dead);
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io0(elem),
        )
      );
    };
    const stringify = (input: ObjectAlias): string => {
      const $string = (typia.json.isStringify as any).string;
      const $number = (typia.json.isStringify as any).number;
      const $throws = (typia.json.isStringify as any).throws;
      const $so0 = (input: any): any =>
        `{"id":${
          null !== input.id ? $string(input.id) : "null"
        },"email":${$string(input.email)},"name":${$string(input.name)},"sex":${
          null !== input.sex
            ? (() => {
                if ("string" === typeof input.sex) return $string(input.sex);
                if ("number" === typeof input.sex) return $number(input.sex);
                if ("string" === typeof input.sex) return '"' + input.sex + '"';
                $throws({
                  expected: '("female" | "male" | 1 | 2 | null)',
                  value: input.sex,
                });
              })()
            : "null"
        },"age":${null !== input.age ? $number(input.age) : "null"},"dead":${
          null !== input.dead ? input.dead : "null"
        }}`;
      return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);

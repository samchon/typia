import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_createStringify_ObjectAlias = _test_json_stringify(
  "ObjectAlias",
)<ObjectAlias>(ObjectAlias)((input: ObjectAlias): string => {
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $string = require("typia/lib/functional/$string").$string;
  const $number = require("typia/lib/functional/$number").$number;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  const $so0 = (input: any): any =>
    `{"id":${null !== input.id ? $string(input.id) : "null"},"email":${$string(
      input.email,
    )},"name":${$string(input.name)},"sex":${
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
});

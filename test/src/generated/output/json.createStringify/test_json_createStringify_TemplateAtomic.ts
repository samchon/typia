import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_json_createStringify_TemplateAtomic = _test_json_stringify(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input: TemplateAtomic): string => {
  // @ts-ignore;
  declare const require: (lib: string) => any;
  const $string = require("typia/lib/functional/$string").$string;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  const $so0 = (input: any): any =>
    `{"prefix":${$string(input.prefix)},"postfix":${$string(
      input.postfix,
    )},"middle_string":${$string(
      input.middle_string,
    )},"middle_string_empty":${$string(
      input.middle_string_empty,
    )},"middle_numeric":${$string(
      input.middle_numeric,
    )},"middle_boolean":${(() => {
      if ("string" === typeof input.middle_boolean)
        return $string(input.middle_boolean);
      if ("string" === typeof input.middle_boolean)
        return '"' + input.middle_boolean + '"';
      $throws({
        expected: '("the_false_value" | "the_true_value")',
        value: input.middle_boolean,
      });
    })()},"ipv4":${$string(input.ipv4)},"email":${$string(input.email)}}`;
  return $so0(input);
});

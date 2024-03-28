import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_isStringify_ObjectPrimitive = _test_json_isStringify(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  ((input: ObjectPrimitive): string | null => {
    const is = (input: any): input is ObjectPrimitive => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        ("html" === input.extension ||
          "md" === input.extension ||
          "txt" === input.extension) &&
        "string" === typeof input.title &&
        "string" === typeof input.body &&
        Array.isArray(input.files) &&
        input.files.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
        ) &&
        "boolean" === typeof input.secret &&
        "string" === typeof input.created_at;
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.extension &&
        "string" === typeof input.url &&
        "string" === typeof input.created_at;
      return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: ObjectPrimitive): string => {
      const $io1 = (input: any): boolean =>
        "string" === typeof input.id &&
        "string" === typeof input.name &&
        "string" === typeof input.extension &&
        "string" === typeof input.url &&
        "string" === typeof input.created_at;
      const $string = (typia.json.isStringify as any).string;
      const $throws = (typia.json.isStringify as any).throws;
      const $so0 = (input: any): any =>
        `{"id":${$string(input.id)},"extension":${(() => {
          if ("string" === typeof input.extension)
            return $string(input.extension);
          if ("string" === typeof input.extension)
            return '"' + input.extension + '"';
          $throws({
            expected: '("html" | "md" | "txt")',
            value: input.extension,
          });
        })()},"title":${$string(input.title)},"body":${$string(input.body)},"files":${`[${input.files.map((elem: any) => `{"id":${$string((elem as any).id)},"name":${$string((elem as any).name)},"extension":${$string((elem as any).extension)},"url":${$string((elem as any).url)},"created_at":${$string((elem as any).created_at)}}`).join(",")}]`},"secret":${input.secret},"created_at":${$string(input.created_at)}}`;
      return $so0(input);
    };
    return is(input) ? stringify(input) : null;
  })(input),
);

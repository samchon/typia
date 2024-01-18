import typia from "typia";

import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_createStringify_ObjectPrimitive = _test_json_stringify(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input: ObjectPrimitive): string => {
  const $io1 = (input: any): boolean =>
    "string" === typeof input.id &&
    "string" === typeof input.name &&
    "string" === typeof input.extension &&
    "string" === typeof input.url &&
    "string" === typeof input.created_at;
  const $string = require("typia/lib/functional/$string").$string;
  const $throws = require("typia/lib/functional/$throws").$throws(
    "typia.json.createStringify",
  );
  const $so0 = (input: any): any =>
    `{"id":${$string(input.id)},"extension":${(() => {
      if ("string" === typeof input.extension) return $string(input.extension);
      if ("string" === typeof input.extension)
        return '"' + input.extension + '"';
      $throws({
        expected: '("html" | "md" | "txt")',
        value: input.extension,
      });
    })()},"title":${$string(input.title)},"body":${$string(
      input.body,
    )},"files":${`[${input.files
      .map(
        (elem: any) =>
          `{"id":${$string((elem as any).id)},"name":${$string(
            (elem as any).name,
          )},"extension":${$string((elem as any).extension)},"url":${$string(
            (elem as any).url,
          )},"created_at":${$string((elem as any).created_at)}}`,
      )
      .join(",")}]`},"secret":${input.secret},"created_at":${$string(
      input.created_at,
    )}}`;
  return $so0(input);
});

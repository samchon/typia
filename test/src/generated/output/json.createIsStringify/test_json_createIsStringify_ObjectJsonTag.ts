import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_json_createIsStringify_ObjectJsonTag = _test_json_isStringify(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)((input: ObjectJsonTag): string | null => {
  const is = (input: any): input is ObjectJsonTag => {
    return (
      "object" === typeof input &&
      null !== input &&
      "string" === typeof (input as any).vulnerable &&
      "string" === typeof (input as any).description &&
      "string" === typeof (input as any).title &&
      "string" === typeof (input as any).complicate_title
    );
  };
  const stringify = (input: ObjectJsonTag): string => {
    // @ts-ignore;
    declare const require: (lib: string) => any;
    const $string = require("typia/lib/functional/$string").$string;
    return `{"vulnerable":${$string(
      (input as any).vulnerable,
    )},"description":${$string((input as any).description)},"title":${$string(
      (input as any).title,
    )},"complicate_title":${$string((input as any).complicate_title)}}`;
  };
  return is(input) ? stringify(input) : null;
});

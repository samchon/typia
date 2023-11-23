import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_json_createIsStringify_ObjectIntersection =
  _test_json_isStringify("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )((input: ObjectIntersection): string | null => {
    const is = (input: any): input is ObjectIntersection => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).email &&
        "string" === typeof (input as any).name &&
        "boolean" === typeof (input as any).vulnerable
      );
    };
    const stringify = (input: ObjectIntersection): string => {
      const $string = (typia.json.createIsStringify as any).string;
      return `{"email":${$string((input as any).email)},"name":${$string(
        (input as any).name,
      )},"vulnerable":${(input as any).vulnerable}}`;
    };
    return is(input) ? stringify(input) : null;
  });

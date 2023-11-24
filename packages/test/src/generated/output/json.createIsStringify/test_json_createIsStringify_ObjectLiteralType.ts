import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_createIsStringify_ObjectLiteralType =
  _test_json_isStringify("ObjectLiteralType")<ObjectLiteralType>(
    ObjectLiteralType,
  )((input: ObjectLiteralType): string | null => {
    const is = (input: any): input is ObjectLiteralType => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).id &&
        "string" === typeof (input as any).name &&
        "number" === typeof (input as any).age &&
        Number.isFinite((input as any).age)
      );
    };
    const stringify = (input: ObjectLiteralType): string => {
      const $string = (typia.json.createIsStringify as any).string;
      const $number = (typia.json.createIsStringify as any).number;
      return `{"id":${$string((input as any).id)},"name":${$string(
        (input as any).name,
      )},"age":${$number((input as any).age)}}`;
    };
    return is(input) ? stringify(input) : null;
  });

import typia from "typia";

import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectLiteralType } from "../../../structures/ObjectLiteralType";

export const test_json_createIsParse_ObjectLiteralType = _test_json_isParse(
  "ObjectLiteralType",
)<ObjectLiteralType>(ObjectLiteralType)(
  (input: any): typia.Primitive<ObjectLiteralType> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);

import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
export const test_json_createIsParse_ObjectIntersection = _test_json_isParse(
  "ObjectIntersection",
)<ObjectIntersection>(ObjectIntersection)(
  (input: any): import("typia").Primitive<ObjectIntersection> => {
    const is = (input: any): input is ObjectIntersection => {
      return (
        "object" === typeof input &&
        null !== input &&
        "string" === typeof (input as any).email &&
        "string" === typeof (input as any).name &&
        "boolean" === typeof (input as any).vulnerable
      );
    };
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);

import typia from "typia";
import { _test_json_isParse } from "../../../internal/_test_json_isParse";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
export const test_json_createIsParse_ObjectJsonTag = _test_json_isParse(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(
  (input: any): import("typia").Primitive<ObjectJsonTag> => {
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
    input = JSON.parse(input);
    return is(input) ? (input as any) : null;
  },
);

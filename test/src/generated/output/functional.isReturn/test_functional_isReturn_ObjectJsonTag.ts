import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_functional_isReturn_ObjectJsonTag = _test_functional_isReturn(
  "ObjectJsonTag",
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => ObjectJsonTag) =>
    (input: ObjectJsonTag): ObjectJsonTag | null => {
      const result = p(input);
      return ((input: any): input is ObjectJsonTag => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).vulnerable &&
          "string" === typeof (input as any).description &&
          "string" === typeof (input as any).title &&
          "string" === typeof (input as any).complicate_title
        );
      })(result)
        ? result
        : null;
    },
);

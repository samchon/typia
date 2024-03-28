import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_functional_isFunctionAsync_ObjectJsonTag =
  _test_functional_isFunctionAsync("ObjectJsonTag")(ObjectJsonTag)(
    (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
      async (input: ObjectJsonTag): Promise<ObjectJsonTag | null> => {
        if (
          false ===
          ((input: any): input is ObjectJsonTag => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).vulnerable &&
              "string" === typeof (input as any).description &&
              "string" === typeof (input as any).title &&
              "string" === typeof (input as any).complicate_title
            );
          })(input)
        )
          return null;
        const result = await p(input);
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

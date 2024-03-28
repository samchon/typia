import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_isFunctionAsync_ObjectLiteralProperty =
  _test_functional_isFunctionAsync("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      async (
        input: ObjectLiteralProperty,
      ): Promise<ObjectLiteralProperty | null> => {
        if (
          false ===
          ((input: any): input is ObjectLiteralProperty.ISomething => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" ===
                typeof (input as any)["something-interesting-do-you-want?"] &&
              "string" ===
                typeof (input as any)["or-something-crazy-do-you-want?"]
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectLiteralProperty.ISomething => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" ===
              typeof (input as any)["something-interesting-do-you-want?"] &&
            "string" ===
              typeof (input as any)["or-something-crazy-do-you-want?"]
          );
        })(result)
          ? result
          : null;
      },
  );

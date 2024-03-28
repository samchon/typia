import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_isParametersAsync_ObjectLiteralProperty =
  _test_functional_isParametersAsync("ObjectLiteralProperty")(
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
        return p(input);
      },
  );

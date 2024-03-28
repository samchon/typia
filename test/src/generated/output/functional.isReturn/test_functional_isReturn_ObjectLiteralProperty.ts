import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_isReturn_ObjectLiteralProperty =
  _test_functional_isReturn("ObjectLiteralProperty")(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      (input: ObjectLiteralProperty): ObjectLiteralProperty | null => {
        const result = p(input);
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

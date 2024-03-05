import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_isParameters_ObjectLiteralProperty =
  _test_functional_isParameters("ObjectLiteralProperty")(ObjectLiteralProperty)(
    (p: (input: ObjectLiteralProperty) => ObjectLiteralProperty) =>
      (input: ObjectLiteralProperty): ObjectLiteralProperty | null => {
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

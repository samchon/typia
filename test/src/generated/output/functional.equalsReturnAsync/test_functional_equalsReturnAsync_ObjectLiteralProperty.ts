import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { ObjectLiteralProperty } from "../../../structures/ObjectLiteralProperty";

export const test_functional_equalsReturnAsync_ObjectLiteralProperty =
  _test_functional_equalsReturnAsync("ObjectLiteralProperty")(
    ObjectLiteralProperty,
  )(
    (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
      async (
        input: ObjectLiteralProperty,
      ): Promise<ObjectLiteralProperty | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectLiteralProperty.ISomething => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input["something-interesting-do-you-want?"] &&
            "string" === typeof input["or-something-crazy-do-you-want?"] &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "something-interesting-do-you-want?",
                    "or-something-crazy-do-you-want?",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );

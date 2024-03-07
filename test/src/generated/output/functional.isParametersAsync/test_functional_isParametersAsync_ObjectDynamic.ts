import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
export const test_functional_isParametersAsync_ObjectDynamic =
  _test_functional_isParametersAsync("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
      async (input: ObjectDynamic): Promise<ObjectDynamic | null> => {
        if (
          false ===
          ((input: any): input is ObjectDynamic => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value
                );
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

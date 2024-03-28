import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_functional_equalsParameters_ClassMethod =
  _test_functional_equalsParameters("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      (input: ClassMethod): ClassMethod | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ClassMethod.Animal => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["name", "age"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

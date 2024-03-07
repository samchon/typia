import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ClassMethod } from "../../../structures/ClassMethod";
export const test_functional_equalsReturn_ClassMethod =
  _test_functional_equalsReturn("ClassMethod")(ClassMethod)(
    (p: (input: ClassMethod) => ClassMethod) =>
      (input: ClassMethod): ClassMethod | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ClassMethod.Animal => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
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
        })(result)
          ? result
          : null;
      },
  );

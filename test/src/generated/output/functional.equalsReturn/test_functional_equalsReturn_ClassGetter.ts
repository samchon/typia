import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ClassGetter } from "../../../structures/ClassGetter";
export const test_functional_equalsReturn_ClassGetter =
  _test_functional_equalsReturn("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      (input: ClassGetter): ClassGetter | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ClassGetter.Person => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead) &&
            (3 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["id", "name", "dead"].some((prop: any) => key === prop))
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

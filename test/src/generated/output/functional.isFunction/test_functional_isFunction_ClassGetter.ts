import typia from "typia";
import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ClassGetter } from "../../../structures/ClassGetter";
export const test_functional_isFunction_ClassGetter =
  _test_functional_isFunction("ClassGetter")(ClassGetter)(
    (p: (input: ClassGetter) => ClassGetter) =>
      (input: ClassGetter): ClassGetter | null => {
        if (
          false ===
          ((input: any): input is ClassGetter.Person => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              (null === input.dead || "boolean" === typeof input.dead);
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ClassGetter.Person => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead);
          return "object" === typeof input && null !== input && $io0(input);
        })(result)
          ? result
          : null;
      },
  );

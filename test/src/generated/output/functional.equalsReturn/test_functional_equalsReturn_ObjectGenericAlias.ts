import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_equalsReturn_ObjectGenericAlias =
  _test_functional_equalsReturn("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (input: ObjectGenericAlias): ObjectGenericAlias | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectGenericAlias.Alias => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.value &&
            (1 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
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

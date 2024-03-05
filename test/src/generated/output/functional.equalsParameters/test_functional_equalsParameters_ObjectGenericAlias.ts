import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_functional_equalsParameters_ObjectGenericAlias =
  _test_functional_equalsParameters("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (input: ObjectGenericAlias): ObjectGenericAlias | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectGenericAlias.Alias => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
          })(input)
        )
          return null;
        return p(input);
      },
  );

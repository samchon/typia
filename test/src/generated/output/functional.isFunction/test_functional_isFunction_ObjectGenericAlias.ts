import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_functional_isFunction_ObjectGenericAlias =
  _test_functional_isFunction("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (input: ObjectGenericAlias): ObjectGenericAlias | null => {
        if (
          false ===
          ((input: any): input is ObjectGenericAlias.Alias => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).value
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ObjectGenericAlias.Alias => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).value
          );
        })(result)
          ? result
          : null;
      },
  );

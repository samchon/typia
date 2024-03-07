import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_isParameters_ObjectGenericAlias =
  _test_functional_isParameters("ObjectGenericAlias")(ObjectGenericAlias)(
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
        return p(input);
      },
  );

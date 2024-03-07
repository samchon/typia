import typia from "typia";
import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_isReturn_ObjectGenericAlias =
  _test_functional_isReturn("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => ObjectGenericAlias) =>
      (input: ObjectGenericAlias): ObjectGenericAlias | null => {
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

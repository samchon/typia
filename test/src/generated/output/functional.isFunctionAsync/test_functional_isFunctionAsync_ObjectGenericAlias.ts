import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
export const test_functional_isFunctionAsync_ObjectGenericAlias =
  _test_functional_isFunctionAsync("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      async (input: ObjectGenericAlias): Promise<ObjectGenericAlias | null> => {
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
        const result = await p(input);
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

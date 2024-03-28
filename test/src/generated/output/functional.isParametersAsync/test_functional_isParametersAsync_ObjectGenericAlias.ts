import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_functional_isParametersAsync_ObjectGenericAlias =
  _test_functional_isParametersAsync("ObjectGenericAlias")(ObjectGenericAlias)(
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
        return p(input);
      },
  );

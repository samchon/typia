import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_functional_isReturnAsync_ObjectGenericAlias =
  _test_functional_isReturnAsync("ObjectGenericAlias")(ObjectGenericAlias)(
    (p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
      async (input: ObjectGenericAlias): Promise<ObjectGenericAlias | null> => {
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

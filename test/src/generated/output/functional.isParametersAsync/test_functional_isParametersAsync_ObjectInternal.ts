import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_functional_isParametersAsync_ObjectInternal =
  _test_functional_isParametersAsync("ObjectInternal")(ObjectInternal)(
    (p: (input: ObjectInternal) => Promise<ObjectInternal>) =>
      async (input: ObjectInternal): Promise<ObjectInternal | null> => {
        if (
          false ===
          ((input: any): input is ObjectInternal => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).id &&
              "string" === typeof (input as any).name
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_functional_isParametersAsync_ClassNonPublic =
  _test_functional_isParametersAsync("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      async (input: ClassNonPublic): Promise<ClassNonPublic | null> => {
        if (
          false ===
          ((input: any): input is ClassNonPublic.Accessor => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).implicit &&
              "string" === typeof (input as any).shown
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );

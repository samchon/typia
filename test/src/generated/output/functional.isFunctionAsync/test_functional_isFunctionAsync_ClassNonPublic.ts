import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_functional_isFunctionAsync_ClassNonPublic =
  _test_functional_isFunctionAsync("ClassNonPublic")(ClassNonPublic)(
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
        const result = await p(input);
        return ((input: any): input is ClassNonPublic.Accessor => {
          return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof (input as any).implicit &&
            "string" === typeof (input as any).shown
          );
        })(result)
          ? result
          : null;
      },
  );

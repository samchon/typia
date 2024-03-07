import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
export const test_functional_isReturnAsync_ClassNonPublic =
  _test_functional_isReturnAsync("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
      async (input: ClassNonPublic): Promise<ClassNonPublic | null> => {
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

import typia from "typia";
import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";
export const test_functional_isParameters_ClassNonPublic =
  _test_functional_isParameters("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => ClassNonPublic) =>
      (input: ClassNonPublic): ClassNonPublic | null => {
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

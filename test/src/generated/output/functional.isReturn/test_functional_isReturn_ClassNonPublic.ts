import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_functional_isReturn_ClassNonPublic =
  _test_functional_isReturn("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => ClassNonPublic) =>
      (input: ClassNonPublic): ClassNonPublic | null => {
        const result = p(input);
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

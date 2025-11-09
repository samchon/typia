import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_isReturn_ClassNonPublic = (): void =>
  _test_functional_isReturn("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => ClassNonPublic) =>
      typia.functional.isReturn(p),
  );

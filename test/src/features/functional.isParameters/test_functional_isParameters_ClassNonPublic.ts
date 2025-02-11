import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_isParameters_ClassNonPublic =
  _test_functional_isParameters("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => ClassNonPublic) =>
      typia.functional.isParameters(p),
  );

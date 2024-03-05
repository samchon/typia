import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_validateParameters_ClassNonPublic =
  _test_functional_validateParameters("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => ClassNonPublic) =>
      typia.functional.validateParameters(p),
  );

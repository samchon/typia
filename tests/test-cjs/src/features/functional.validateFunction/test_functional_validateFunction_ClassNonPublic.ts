import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_validateFunction_ClassNonPublic = (): void =>
  _test_functional_validateFunction("ClassNonPublic")(ClassNonPublic)(
    (p: (input: ClassNonPublic) => ClassNonPublic) =>
      typia.functional.validateFunction(p),
  );

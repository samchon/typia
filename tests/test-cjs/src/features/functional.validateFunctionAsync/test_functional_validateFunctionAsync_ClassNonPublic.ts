import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_functional_validateFunctionAsync_ClassNonPublic =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ClassNonPublic")(ClassNonPublic)(
      (p: (input: ClassNonPublic) => Promise<ClassNonPublic>) =>
        typia.functional.validateFunction(p),
    );

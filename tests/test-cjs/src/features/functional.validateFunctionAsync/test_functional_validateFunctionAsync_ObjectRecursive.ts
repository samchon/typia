import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateFunctionAsync_ObjectRecursive =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectRecursive")(ObjectRecursive)(
      (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
        typia.functional.validateFunction(p),
    );

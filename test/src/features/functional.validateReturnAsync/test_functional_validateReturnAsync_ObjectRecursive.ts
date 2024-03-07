import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateReturnAsync_ObjectRecursive =
  _test_functional_validateReturnAsync("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => Promise<ObjectRecursive>) =>
      typia.functional.validateReturn(p),
  );

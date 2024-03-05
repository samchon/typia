import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_validateReturn_ObjectRecursive =
  _test_functional_validateReturn("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.validateReturn(p),
  );

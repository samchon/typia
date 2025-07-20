import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_isFunction_ObjectRecursive = (): void =>
  _test_functional_isFunction("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.isFunction(p),
  );

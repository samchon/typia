import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_isReturn_ObjectRecursive =
  _test_functional_isReturn("ObjectRecursive")(ObjectRecursive)(
    (p: (input: ObjectRecursive) => ObjectRecursive) =>
      typia.functional.isReturn(p),
  );

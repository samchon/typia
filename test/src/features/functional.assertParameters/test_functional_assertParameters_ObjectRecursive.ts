import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_functional_assertParameters_ObjectRecursive = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ObjectRecursive")(
    ObjectRecursive,
  )((p: (input: ObjectRecursive) => ObjectRecursive) =>
    typia.functional.assertParameters(p),
  );

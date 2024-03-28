import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_functional_assertFunctionAsync_ObjectAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectAlias")(
    ObjectAlias,
  )((p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
    typia.functional.assertFunction(p),
  );

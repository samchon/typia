import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_functional_assertFunctionAsync_ObjectGenericAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.assertFunction(p),
  );

import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectGenericAlias =
  _test_functional_assertFunctionAsync(CustomGuardError)("ObjectGenericAlias")(
    ObjectGenericAlias,
  )((p: (input: ObjectGenericAlias) => Promise<ObjectGenericAlias>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );

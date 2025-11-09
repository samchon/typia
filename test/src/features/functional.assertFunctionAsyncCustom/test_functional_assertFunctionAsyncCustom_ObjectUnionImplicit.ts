import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectUnionImplicit = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectUnionImplicit"
)(ObjectUnionImplicit)(
  (p: (input: ObjectUnionImplicit) => Promise<ObjectUnionImplicit>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)
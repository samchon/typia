import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectUnionDouble = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectUnionDouble"
)(ObjectUnionDouble)(
  (p: (input: ObjectUnionDouble) => Promise<ObjectUnionDouble>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)
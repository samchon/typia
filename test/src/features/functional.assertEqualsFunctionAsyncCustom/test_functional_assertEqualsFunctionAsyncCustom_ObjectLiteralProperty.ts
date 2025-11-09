import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ObjectLiteralProperty = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ObjectLiteralProperty"
)(ObjectLiteralProperty)(
  (p: (input: ObjectLiteralProperty) => Promise<ObjectLiteralProperty>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)
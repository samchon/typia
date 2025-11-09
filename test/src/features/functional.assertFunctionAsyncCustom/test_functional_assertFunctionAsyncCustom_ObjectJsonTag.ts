import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ObjectJsonTag = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ObjectJsonTag"
)(ObjectJsonTag)(
  (p: (input: ObjectJsonTag) => Promise<ObjectJsonTag>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)
import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ObjectUnionExplicitPointer = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => Promise<ObjectUnionExplicitPointer>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)
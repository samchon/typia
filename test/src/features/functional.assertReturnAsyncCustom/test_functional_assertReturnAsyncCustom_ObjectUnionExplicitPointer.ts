import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ObjectUnionExplicitPointer = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => Promise<ObjectUnionExplicitPointer>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)
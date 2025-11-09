import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ObjectUnionExplicitPointer = (): Promise<void> => _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => Promise<ObjectUnionExplicitPointer>) =>
    typia.functional.assertEqualsParameters(p),
)
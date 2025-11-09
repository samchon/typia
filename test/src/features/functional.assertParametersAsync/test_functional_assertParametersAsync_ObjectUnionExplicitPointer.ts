import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ObjectUnionExplicitPointer = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => Promise<ObjectUnionExplicitPointer>) =>
    typia.functional.assertParameters(p),
)
import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_functional_validateFunctionAsync_ObjectUnionExplicitPointer = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => Promise<ObjectUnionExplicitPointer>) =>
    typia.functional.validateFunction(p),
)
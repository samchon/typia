import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ObjectUnionExplicitPointer = (): void => _test_functional_assertFunction(TypeGuardError)(
  "ObjectUnionExplicitPointer"
)(ObjectUnionExplicitPointer)(
  (p: (input: ObjectUnionExplicitPointer) => ObjectUnionExplicitPointer) => typia.functional.assertFunction(p),
)
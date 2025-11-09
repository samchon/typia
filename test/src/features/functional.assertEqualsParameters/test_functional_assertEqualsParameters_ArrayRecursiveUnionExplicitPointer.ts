import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ArrayRecursiveUnionExplicitPointer = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => ArrayRecursiveUnionExplicitPointer) => typia.functional.assertEqualsParameters(p),
)
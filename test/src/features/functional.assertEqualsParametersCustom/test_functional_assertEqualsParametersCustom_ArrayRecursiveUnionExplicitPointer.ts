import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ArrayRecursiveUnionExplicitPointer = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ArrayRecursiveUnionExplicitPointer"
)(ArrayRecursiveUnionExplicitPointer)(
  (p: (input: ArrayRecursiveUnionExplicitPointer) => ArrayRecursiveUnionExplicitPointer) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)
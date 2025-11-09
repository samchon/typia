import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ArrayAtomicAlias = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ArrayAtomicAlias"
)(ArrayAtomicAlias)(
  (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) => typia.functional.assertEqualsParameters(p),
)
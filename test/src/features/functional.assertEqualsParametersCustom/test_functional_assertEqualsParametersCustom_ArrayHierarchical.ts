import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ArrayHierarchical = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ArrayHierarchical"
)(ArrayHierarchical)(
  (p: (input: ArrayHierarchical) => ArrayHierarchical) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)
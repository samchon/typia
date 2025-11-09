import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TypeTagType = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.assertEqualsParameters(p),
)
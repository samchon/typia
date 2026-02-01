import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateParameters_TypeTagType = (): void => _test_functional_validateParameters(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.validateParameters(p),
)
import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_functional_validateEqualsFunction_TypeTagType = (): void => _test_functional_validateEqualsFunction(
  "TypeTagType"
)(TypeTagType)(
  (p: (input: TypeTagType) => TypeTagType) => typia.functional.validateEqualsFunction(p),
)
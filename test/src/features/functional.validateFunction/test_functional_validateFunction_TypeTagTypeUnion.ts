import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_functional_validateFunction_TypeTagTypeUnion = (): void => _test_functional_validateFunction(
  "TypeTagTypeUnion"
)(TypeTagTypeUnion)(
  (p: (input: TypeTagTypeUnion) => TypeTagTypeUnion) => typia.functional.validateFunction(p),
)
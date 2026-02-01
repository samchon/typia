import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_validateFunction_ArrayAny = (): void => _test_functional_validateFunction(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => ArrayAny) => typia.functional.validateFunction(p),
)
import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_validateParameters_ArrayAny = (): void => _test_functional_validateParameters(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => ArrayAny) => typia.functional.validateParameters(p),
)
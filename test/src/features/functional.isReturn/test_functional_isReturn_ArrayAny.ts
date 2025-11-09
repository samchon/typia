import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_functional_isReturn_ArrayAny = (): void => _test_functional_isReturn(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => ArrayAny) => typia.functional.isReturn(p),
)
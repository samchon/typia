import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_functional_isReturn_TypeTagRange = _test_functional_isReturn(
  "TypeTagRange",
)(TypeTagRange)((p: (input: TypeTagRange) => TypeTagRange) =>
  typia.functional.isReturn(p),
);

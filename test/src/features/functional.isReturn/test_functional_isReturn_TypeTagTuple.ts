import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_functional_isReturn_TypeTagTuple = _test_functional_isReturn(
  "TypeTagTuple",
)(TypeTagTuple)((p: (input: TypeTagTuple) => TypeTagTuple) =>
  typia.functional.isReturn(p),
);

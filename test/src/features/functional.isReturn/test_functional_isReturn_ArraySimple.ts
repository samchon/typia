import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_isReturn_ArraySimple = _test_functional_isReturn(
  "ArraySimple",
)(ArraySimple)((p: (input: ArraySimple) => ArraySimple) =>
  typia.functional.isReturn(p),
);

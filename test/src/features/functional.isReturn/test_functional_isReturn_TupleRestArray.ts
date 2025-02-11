import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_isReturn_TupleRestArray = _test_functional_isReturn(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => TupleRestArray) => typia.functional.isReturn(p),
)
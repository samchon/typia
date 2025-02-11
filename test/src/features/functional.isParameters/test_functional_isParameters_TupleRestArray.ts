import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_isParameters_TupleRestArray = _test_functional_isParameters(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => TupleRestArray) => typia.functional.isParameters(p),
)
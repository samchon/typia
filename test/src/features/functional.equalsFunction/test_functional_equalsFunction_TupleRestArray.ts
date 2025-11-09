import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_equalsFunction_TupleRestArray = (): void => _test_functional_equalsFunction(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => TupleRestArray) => typia.functional.equalsFunction(p),
)
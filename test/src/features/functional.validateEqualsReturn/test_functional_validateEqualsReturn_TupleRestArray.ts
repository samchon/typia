import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_validateEqualsReturn_TupleRestArray = (): void => _test_functional_validateEqualsReturn(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => TupleRestArray) => typia.functional.validateEqualsReturn(p),
)
import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TupleRestArray = _test_functional_assertEqualsReturn(TypeGuardError)(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => TupleRestArray) => typia.functional.assertEqualsReturn(p),
)
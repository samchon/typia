import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_TupleRestArray = (): void => _test_functional_assertReturn(TypeGuardError)(
  "TupleRestArray"
)(TupleRestArray)(
  (p: (input: TupleRestArray) => TupleRestArray) => typia.functional.assertReturn(p),
)
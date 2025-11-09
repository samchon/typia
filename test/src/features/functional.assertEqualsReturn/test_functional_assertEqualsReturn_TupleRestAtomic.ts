import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TupleRestAtomic = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => TupleRestAtomic) => typia.functional.assertEqualsReturn(p),
)
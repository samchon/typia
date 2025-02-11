import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TupleRestAtomic = _test_functional_assertEqualsReturnAsync(TypeGuardError)(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertEqualsReturn(p),
)
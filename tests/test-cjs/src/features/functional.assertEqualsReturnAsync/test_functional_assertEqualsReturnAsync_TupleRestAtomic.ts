import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsReturnAsync_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TupleRestAtomic")(
      TupleRestAtomic,
    )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      typia.functional.assertEqualsReturn(p),
    );

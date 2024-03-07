import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_TupleRestAtomic =
  _test_functional_assertReturnAsync(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertReturn(p),
  );

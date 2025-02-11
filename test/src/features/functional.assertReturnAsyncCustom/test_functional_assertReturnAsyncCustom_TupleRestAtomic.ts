import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TupleRestAtomic = _test_functional_assertReturnAsync(CustomGuardError)(
  "TupleRestAtomic"
)(TupleRestAtomic)(
  (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)
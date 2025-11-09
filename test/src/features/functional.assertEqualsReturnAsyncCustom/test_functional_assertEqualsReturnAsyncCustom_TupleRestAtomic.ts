import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsReturnAsyncCustom_TupleRestAtomic =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "TupleRestAtomic",
    )(TupleRestAtomic)(
      (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );

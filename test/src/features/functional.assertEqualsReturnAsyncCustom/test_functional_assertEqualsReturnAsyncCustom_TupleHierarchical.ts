import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsReturnAsyncCustom_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "TupleHierarchical",
    )(TupleHierarchical)(
      (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );

import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertReturnAsyncCustom_TupleHierarchical =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TupleHierarchical")(
      TupleHierarchical,
    )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );

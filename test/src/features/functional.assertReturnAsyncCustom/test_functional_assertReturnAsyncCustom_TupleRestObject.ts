import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertReturnAsyncCustom_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("TupleRestObject")(
      TupleRestObject,
    )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );

import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_TupleRestObject =
  _test_functional_assertReturnAsync(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );

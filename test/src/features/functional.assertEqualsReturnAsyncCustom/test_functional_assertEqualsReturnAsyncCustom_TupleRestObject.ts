import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsReturnAsyncCustom_TupleRestObject =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );

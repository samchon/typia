import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertFunctionAsyncCustom_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)("TupleRestObject")(
      TupleRestObject,
    )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );

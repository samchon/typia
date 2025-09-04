import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsFunctionAsyncCustom_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TupleRestObject",
    )(TupleRestObject)(
      (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );

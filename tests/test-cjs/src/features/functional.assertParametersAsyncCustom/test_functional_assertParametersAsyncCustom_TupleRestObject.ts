import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertParametersAsyncCustom_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("TupleRestObject")(
      TupleRestObject,
    )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );

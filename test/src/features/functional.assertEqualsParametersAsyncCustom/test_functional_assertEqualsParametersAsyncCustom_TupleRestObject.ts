import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsParametersAsyncCustom_TupleRestObject =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TupleRestObject",
  )(TupleRestObject)(
    (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );

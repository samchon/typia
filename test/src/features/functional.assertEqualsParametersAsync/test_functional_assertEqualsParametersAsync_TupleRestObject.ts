import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsParametersAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "TupleRestObject",
    )(TupleRestObject)(
      (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
        typia.functional.assertEqualsParameters(p),
    );

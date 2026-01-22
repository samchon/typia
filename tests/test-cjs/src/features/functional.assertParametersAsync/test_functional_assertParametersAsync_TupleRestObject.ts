import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertParametersAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TupleRestObject")(
      TupleRestObject,
    )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertParameters(p),
    );

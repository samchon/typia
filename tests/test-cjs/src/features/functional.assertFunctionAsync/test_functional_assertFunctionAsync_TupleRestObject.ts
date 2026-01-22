import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertFunctionAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TupleRestObject")(
      TupleRestObject,
    )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertFunction(p),
    );

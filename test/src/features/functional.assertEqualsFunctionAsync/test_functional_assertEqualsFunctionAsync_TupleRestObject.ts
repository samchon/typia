import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsFunctionAsync_TupleRestObject =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.assertEqualsFunction(p),
  );

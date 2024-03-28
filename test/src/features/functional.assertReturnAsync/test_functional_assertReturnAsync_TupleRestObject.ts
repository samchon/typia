import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertReturnAsync_TupleRestObject =
  _test_functional_assertReturnAsync(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.assertReturn(p),
  );

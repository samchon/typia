import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsReturnAsync_TupleRestObject =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)("TupleRestObject")(
      TupleRestObject,
    )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.assertEqualsReturn(p),
    );

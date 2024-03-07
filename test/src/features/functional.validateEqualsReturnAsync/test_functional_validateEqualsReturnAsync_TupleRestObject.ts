import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateEqualsReturnAsync_TupleRestObject =
  _test_functional_validateEqualsReturnAsync("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.validateEqualsReturn(p),
  );

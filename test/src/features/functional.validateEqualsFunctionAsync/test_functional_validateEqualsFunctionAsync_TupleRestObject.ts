import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateEqualsFunctionAsync_TupleRestObject =
  _test_functional_validateEqualsFunctionAsync("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.validateEqualsFunction(p),
  );

import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateEqualsParametersAsync_TupleRestObject =
  _test_functional_validateEqualsParametersAsync("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
    typia.functional.validateEqualsParameters(p),
  );

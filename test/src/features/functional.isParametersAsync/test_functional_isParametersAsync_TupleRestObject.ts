import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_isParametersAsync_TupleRestObject =
  _test_functional_isParametersAsync("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => Promise<TupleRestObject>) =>
      typia.functional.isParameters(p),
  );

import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_isFunction_TupleRestObject =
  _test_functional_isFunction("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.isFunction(p),
  );

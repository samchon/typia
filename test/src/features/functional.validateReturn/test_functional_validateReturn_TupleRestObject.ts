import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateReturn_TupleRestObject =
  _test_functional_validateReturn("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.validateReturn(p),
  );

import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateEqualsReturn_TupleRestObject =
  _test_functional_validateEqualsReturn("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.validateEqualsReturn(p),
  );

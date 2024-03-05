import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_validateEqualsParameters_TupleRestObject =
  _test_functional_validateEqualsParameters("TupleRestObject")(TupleRestObject)(
    (p: (input: TupleRestObject) => TupleRestObject) =>
      typia.functional.validateEqualsParameters(p),
  );

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_functional_assertEqualsParameters_TupleRestObject =
  _test_functional_assertEqualsParameters(TypeGuardError)("TupleRestObject")(
    TupleRestObject,
  )((p: (input: TupleRestObject) => TupleRestObject) =>
    typia.functional.assertEqualsParameters(p),
  );

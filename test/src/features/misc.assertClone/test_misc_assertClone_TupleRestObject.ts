import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_misc_assertClone_TupleRestObject = _test_misc_assertClone(
  TypeGuardError,
)("TupleRestObject")<TupleRestObject>(TupleRestObject)((input) =>
  typia.misc.assertClone<TupleRestObject>(input),
);

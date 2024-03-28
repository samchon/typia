import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertEquals_TupleOptional = _test_assertEquals(
  TypeGuardError,
)("TupleOptional")<TupleOptional>(TupleOptional)((input) =>
  typia.assertEquals<TupleOptional>(input),
);

import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assert_TupleOptional = _test_assert(TypeGuardError)(
  "TupleOptional",
)<TupleOptional>(TupleOptional)((input) => typia.assert<TupleOptional>(input));

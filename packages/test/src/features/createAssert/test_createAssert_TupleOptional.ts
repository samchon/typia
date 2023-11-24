import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssert_TupleOptional = _test_assert(
  "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.createAssert<TupleOptional>());

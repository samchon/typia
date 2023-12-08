import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertGuard_TupleOptional = _test_assertGuard(
  "TupleOptional",
)<TupleOptional>(TupleOptional)(typia.createAssertGuard<TupleOptional>());

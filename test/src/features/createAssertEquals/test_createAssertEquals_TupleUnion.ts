import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createAssertEquals_TupleUnion = _test_assertEquals(
  TypeGuardError,
)("TupleUnion")<TupleUnion>(TupleUnion)(typia.createAssertEquals<TupleUnion>());

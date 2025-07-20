import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertEquals_TupleHierarchical = (): void =>
  _test_assertEquals(TypeGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.createAssertEquals<TupleHierarchical>());

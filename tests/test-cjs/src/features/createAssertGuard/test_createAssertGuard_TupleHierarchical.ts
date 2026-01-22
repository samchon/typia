import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertGuard_TupleHierarchical = (): void =>
  _test_assertGuard(TypeGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.createAssertGuard<TupleHierarchical>());

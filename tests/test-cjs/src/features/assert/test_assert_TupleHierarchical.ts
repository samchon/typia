import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assert_TupleHierarchical = (): void =>
  _test_assert(TypeGuardError)("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )((input) => typia.assert<TupleHierarchical>(input));

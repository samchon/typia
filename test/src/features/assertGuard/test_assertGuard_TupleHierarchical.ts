import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_assertGuard_TupleHierarchical = _test_assertGuard(TypeGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.assertGuard<TupleHierarchical>(input));

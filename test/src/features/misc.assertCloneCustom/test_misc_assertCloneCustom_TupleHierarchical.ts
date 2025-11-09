import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TupleHierarchical = (): void => _test_misc_assertClone(CustomGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.misc.assertClone<TupleHierarchical>(input, (p) => new CustomGuardError(p)));

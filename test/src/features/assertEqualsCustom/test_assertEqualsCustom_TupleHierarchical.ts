import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TupleHierarchical = _test_assertEquals(CustomGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)((input) => typia.assertEquals<TupleHierarchical>(input, (p) => new CustomGuardError(p)));

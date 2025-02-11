import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TupleHierarchical = _test_assert(CustomGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.createAssert<TupleHierarchical>((p) => new CustomGuardError(p)));

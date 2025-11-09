import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TupleHierarchical = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.createAssertGuardEquals<TupleHierarchical>((p) => new CustomGuardError(p)));

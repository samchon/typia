import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TupleHierarchical = (): void => _test_assertGuard(CustomGuardError)(
    "TupleHierarchical",
)<TupleHierarchical>(
    TupleHierarchical
)(typia.createAssertGuard<TupleHierarchical>((p) => new CustomGuardError(p)));

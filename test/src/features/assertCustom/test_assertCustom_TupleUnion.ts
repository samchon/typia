import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_TupleUnion = _test_assert(CustomGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((input) => typia.assert<TupleUnion>(input, (p) => new CustomGuardError(p)));

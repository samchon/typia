import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_TupleUnion = (): void => _test_assert(TypeGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)(typia.createAssert<TupleUnion>());

import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_createAssert_TupleOptional = _test_assert(TypeGuardError)(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)(typia.createAssert<TupleOptional>());

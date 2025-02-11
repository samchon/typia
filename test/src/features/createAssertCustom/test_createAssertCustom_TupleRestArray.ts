import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TupleRestArray = _test_assert(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.createAssert<TupleRestArray>((p) => new CustomGuardError(p)));

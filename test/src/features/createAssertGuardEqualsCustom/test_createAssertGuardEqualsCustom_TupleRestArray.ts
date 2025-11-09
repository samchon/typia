import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TupleRestArray = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.createAssertGuardEquals<TupleRestArray>((p) => new CustomGuardError(p)));

import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TupleRestArray = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.assertGuardEquals<TupleRestArray>(input, (p) => new CustomGuardError(p)));

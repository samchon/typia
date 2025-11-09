import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TupleRestArray = (): void => _test_assertGuard(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.assertGuard<TupleRestArray>(input, (p) => new CustomGuardError(p)));

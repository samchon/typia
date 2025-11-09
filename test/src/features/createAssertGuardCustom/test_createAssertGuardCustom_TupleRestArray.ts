import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_TupleRestArray = (): void => _test_assertGuard(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.createAssertGuard<TupleRestArray>((p) => new CustomGuardError(p)));

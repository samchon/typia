import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TupleRestArray = (): void => _test_misc_assertClone(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)(typia.misc.createAssertClone<TupleRestArray>((p) => new CustomGuardError(p)));

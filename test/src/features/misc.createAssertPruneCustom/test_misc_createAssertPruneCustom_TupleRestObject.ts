import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TupleRestObject = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.misc.createAssertPrune<TupleRestObject>((p) => new CustomGuardError(p)));

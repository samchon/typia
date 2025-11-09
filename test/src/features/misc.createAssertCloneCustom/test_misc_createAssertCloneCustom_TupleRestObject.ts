import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TupleRestObject = (): void => _test_misc_assertClone(CustomGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.misc.createAssertClone<TupleRestObject>((p) => new CustomGuardError(p)));

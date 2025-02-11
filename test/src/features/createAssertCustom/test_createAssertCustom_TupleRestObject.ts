import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_TupleRestObject = _test_assert(CustomGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)(typia.createAssert<TupleRestObject>((p) => new CustomGuardError(p)));

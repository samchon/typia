import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestObject } from "../../structures/TupleRestObject";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TupleRestObject = (): void => _test_assertEquals(CustomGuardError)(
    "TupleRestObject",
)<TupleRestObject>(
    TupleRestObject
)((input) => typia.assertEquals<TupleRestObject>(input, (p) => new CustomGuardError(p)));

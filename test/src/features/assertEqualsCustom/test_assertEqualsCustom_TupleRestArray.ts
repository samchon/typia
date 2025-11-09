import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TupleRestArray = (): void => _test_assertEquals(CustomGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.assertEquals<TupleRestArray>(input, (p) => new CustomGuardError(p)));

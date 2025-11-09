import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { TypeGuardError } from "typia";

export const test_assert_TupleRestArray = (): void => _test_assert(TypeGuardError)(
    "TupleRestArray",
)<TupleRestArray>(
    TupleRestArray
)((input) => typia.assert<TupleRestArray>(input));

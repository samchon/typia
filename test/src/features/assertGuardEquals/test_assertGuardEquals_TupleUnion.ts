import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleUnion } from "../../structures/TupleUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TupleUnion = (): void => _test_assertGuardEquals(TypeGuardError)(
    "TupleUnion",
)<TupleUnion>(
    TupleUnion
)((input) => typia.assertGuardEquals<TupleUnion>(input));

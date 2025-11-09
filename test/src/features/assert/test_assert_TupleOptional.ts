import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_assert_TupleOptional = (): void => _test_assert(TypeGuardError)(
    "TupleOptional",
)<TupleOptional>(
    TupleOptional
)((input) => typia.assert<TupleOptional>(input));

import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { TypeGuardError } from "typia";

export const test_assert_TupleRestAtomic = (): void => _test_assert(TypeGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.assert<TupleRestAtomic>(input));

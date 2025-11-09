import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TupleRestAtomic = (): void => _test_assertGuard(CustomGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.assertGuard<TupleRestAtomic>(input, (p) => new CustomGuardError(p)));

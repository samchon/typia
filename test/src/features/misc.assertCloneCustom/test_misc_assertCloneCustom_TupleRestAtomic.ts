import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_TupleRestAtomic = (): void => _test_misc_assertClone(CustomGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.misc.assertClone<TupleRestAtomic>(input, (p) => new CustomGuardError(p)));

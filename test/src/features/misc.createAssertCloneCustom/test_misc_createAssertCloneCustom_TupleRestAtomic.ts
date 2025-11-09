import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_TupleRestAtomic = (): void => _test_misc_assertClone(CustomGuardError)(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)(typia.misc.createAssertClone<TupleRestAtomic>((p) => new CustomGuardError(p)));

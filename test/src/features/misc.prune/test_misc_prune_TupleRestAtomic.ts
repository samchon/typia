import typia from "typia";

import { _test_misc_prune } from "../../internal/_test_misc_prune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_prune_TupleRestAtomic = (): void => _test_misc_prune(
    "TupleRestAtomic",
)<TupleRestAtomic>(
    TupleRestAtomic
)((input) => typia.misc.prune<TupleRestAtomic>(input));

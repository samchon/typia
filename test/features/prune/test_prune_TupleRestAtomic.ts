import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_prune } from "../../internal/_test_prune";

export const test_prune_TupleRestAtomic = _test_prune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.prune(input),
);

import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TupleRestAtomic = _test_prune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createPrune<TupleRestAtomic>(),
);

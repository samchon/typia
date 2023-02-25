import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_prune } from "../internal/_test_prune";

export const test_createPrune_TupleRestObject = _test_prune(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createPrune<TupleRestObject>(),
);

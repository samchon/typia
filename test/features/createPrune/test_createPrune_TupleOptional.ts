import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_prune } from "../../internal/_test_prune";

export const test_createPrune_TupleOptional = _test_prune(
    "TupleOptional",
    TupleOptional.generate,
    typia.createPrune<TupleOptional>(),
);

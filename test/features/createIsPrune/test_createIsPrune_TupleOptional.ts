import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_TupleOptional = _test_isPrune(
    "TupleOptional",
    TupleOptional.generate,
    typia.createIsPrune<TupleOptional>(),
    TupleOptional.SPOILERS,
);

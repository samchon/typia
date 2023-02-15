import typia from "typia";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TupleUnion = _test_isPrune(
    "TupleUnion",
    TupleUnion.generate,
    typia.createIsPrune<TupleUnion>(),
    TupleUnion.SPOILERS,
);

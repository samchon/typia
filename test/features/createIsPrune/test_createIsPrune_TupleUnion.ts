import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createIsPrune_TupleUnion = _test_isPrune(
    "TupleUnion",
    TupleUnion.generate,
    typia.createIsPrune<TupleUnion>(),
    TupleUnion.SPOILERS,
);

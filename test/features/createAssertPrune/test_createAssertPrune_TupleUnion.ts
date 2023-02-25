import typia from "../../../src";
import { TupleUnion } from "../../structures/TupleUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TupleUnion = _test_assertPrune(
    "TupleUnion",
    TupleUnion.generate,
    typia.createAssertPrune<TupleUnion>(),
    TupleUnion.SPOILERS,
);

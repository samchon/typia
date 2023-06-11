import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_assertPrune_TupleUnion = _test_assertPrune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.assertPrune(input),
    TupleUnion.SPOILERS,
);

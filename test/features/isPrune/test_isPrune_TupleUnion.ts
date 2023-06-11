import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_isPrune_TupleUnion = _test_isPrune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.isPrune(input),
    TupleUnion.SPOILERS,
);

import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_misc_assertPrune_TupleUnion = _test_misc_assertPrune(
    "TupleUnion",
    TupleUnion.generate,
    (input) => typia.misc.assertPrune(input),
    TupleUnion.SPOILERS,
);

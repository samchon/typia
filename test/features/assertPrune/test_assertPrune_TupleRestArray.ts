import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_assertPrune_TupleRestArray = _test_assertPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertPrune(input),
    TupleRestArray.SPOILERS,
);

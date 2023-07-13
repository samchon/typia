import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_assertPrune_TupleRestArray = _test_misc_assertPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.misc.assertPrune(input),
    TupleRestArray.SPOILERS,
);

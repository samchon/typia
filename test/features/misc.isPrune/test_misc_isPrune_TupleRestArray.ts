import typia from "../../../src";
import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_misc_isPrune_TupleRestArray = _test_misc_isPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.misc.isPrune(input),
    TupleRestArray.SPOILERS,
);

import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_isPrune_TupleRestArray = _test_isPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.isPrune<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);

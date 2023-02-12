import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TupleRestArray = _test_isPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createIsPrune<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
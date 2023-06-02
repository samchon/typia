import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createIsPrune_TupleRestArray = _test_isPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createIsPrune<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

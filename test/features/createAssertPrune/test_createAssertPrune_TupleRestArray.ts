import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertPrune_TupleRestArray = _test_assertPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssertPrune<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

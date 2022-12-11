import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_TupleRestArray = _test_assert(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createAssert<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

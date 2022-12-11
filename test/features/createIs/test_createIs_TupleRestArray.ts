import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TupleRestArray = _test_is(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createIs<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

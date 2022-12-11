import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TupleRestArray = _test_assertStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    TSON.createAssertStringify<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

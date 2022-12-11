import TSON from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TupleRestArray = _test_assertStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => TSON.assertStringify(input),
    TupleRestArray.SPOILERS,
);

import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_TupleRestArray = _test_assertEquals(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertEquals(input),
);
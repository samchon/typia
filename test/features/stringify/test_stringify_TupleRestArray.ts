import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_TupleRestArray = _test_stringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.stringify(input),
);
import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_stringify_TupleRestArray = _test_stringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.stringify<TupleRestArray>(input),
);

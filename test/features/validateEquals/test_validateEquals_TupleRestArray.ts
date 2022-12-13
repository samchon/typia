import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TupleRestArray = _test_validateEquals(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validateEquals(input),
);
import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TupleRestArray = _test_assertParse(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssertParse<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
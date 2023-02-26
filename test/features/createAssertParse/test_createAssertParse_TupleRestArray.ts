import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertParse_TupleRestArray = _test_assertParse(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssertParse<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

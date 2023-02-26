import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createAssertStringify_TupleRestArray = _test_assertStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createAssertStringify<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);

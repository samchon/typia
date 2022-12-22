import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TupleRestArray = _test_isStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.isStringify(input),
    TupleRestArray.SPOILERS,
);

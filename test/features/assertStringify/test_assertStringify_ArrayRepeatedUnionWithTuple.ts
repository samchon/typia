import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_assertStringify_ArrayRepeatedUnionWithTuple =
    _test_assertStringify(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        (input) => typia.assertStringify<ArrayRepeatedUnionWithTuple>(input),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );

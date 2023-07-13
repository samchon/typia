import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_json_assertStringify_ArrayRepeatedUnionWithTuple =
    _test_json_assertStringify(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        (input) => typia.json.assertStringify(input),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );

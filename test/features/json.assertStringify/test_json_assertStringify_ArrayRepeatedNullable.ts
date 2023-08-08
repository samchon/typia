import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_json_assertStringify_ArrayRepeatedNullable =
    _test_json_assertStringify(
        "ArrayRepeatedNullable",
        ArrayRepeatedNullable.generate,
        (input) => typia.json.assertStringify(input),
        ArrayRepeatedNullable.SPOILERS,
    );

import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_assertStringify_ArrayRecursive =
    _test_json_assertStringify(
        "ArrayRecursive",
        ArrayRecursive.generate,
        (input) => typia.json.assertStringify(input),
        ArrayRecursive.SPOILERS,
    );

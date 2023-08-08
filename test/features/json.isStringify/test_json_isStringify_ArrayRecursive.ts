import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_isStringify_ArrayRecursive = _test_json_isStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.json.isStringify(input),
    ArrayRecursive.SPOILERS,
);

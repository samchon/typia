import typia from "../../../src";
import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_validateParse_ArrayRecursive = _test_json_validateParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.json.validateParse<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);

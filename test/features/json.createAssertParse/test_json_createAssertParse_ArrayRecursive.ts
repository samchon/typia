import typia from "../../../src";
import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_json_assertParse_ArrayRecursive = _test_json_assertParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    typia.json.createAssertParse<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);

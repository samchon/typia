import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_assertStringify_ArrayHierarchical =
    _test_json_assertStringify(
        "ArrayHierarchical",
        ArrayHierarchical.generate,
        (input) => typia.json.assertStringify(input),
        ArrayHierarchical.SPOILERS,
    );

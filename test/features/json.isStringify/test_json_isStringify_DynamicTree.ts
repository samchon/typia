import typia from "../../../src";
import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_isStringify_DynamicTree = _test_json_isStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.json.isStringify(input),
    DynamicTree.SPOILERS,
);

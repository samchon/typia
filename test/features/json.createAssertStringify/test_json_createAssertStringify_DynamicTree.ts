import typia from "../../../src";
import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_json_assertStringify_DynamicTree = _test_json_assertStringify(
    "DynamicTree",
    DynamicTree.generate,
    typia.json.createAssertStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

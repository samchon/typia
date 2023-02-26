import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertStringify_DynamicTree = _test_assertStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.assertStringify(input),
    DynamicTree.SPOILERS,
);

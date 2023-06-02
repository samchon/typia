import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createAssertStringify_DynamicTree = _test_assertStringify(
    "DynamicTree",
    DynamicTree.generate,
    typia.createAssertStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

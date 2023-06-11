import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_DynamicTree = _test_assertStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.assertStringify(input),
    DynamicTree.SPOILERS,
);

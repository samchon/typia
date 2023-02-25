import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_DynamicTree = _test_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.assertParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

import typia from "typia";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicTree = _test_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    typia.createAssertParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);

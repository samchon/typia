import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createAssertParse_DynamicTree = _test_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    typia.createAssertParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);

import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertParse_DynamicTree = _test_assertParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.assertParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertClone_DynamicTree = _test_assertClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.assertClone(input),
    DynamicTree.SPOILERS,
);

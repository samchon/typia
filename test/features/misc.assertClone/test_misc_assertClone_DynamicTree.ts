import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_misc_assertClone_DynamicTree = _test_misc_assertClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.misc.assertClone(input),
    DynamicTree.SPOILERS,
);

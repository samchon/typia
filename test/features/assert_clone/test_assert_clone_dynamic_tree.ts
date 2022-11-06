import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_dynamic_tree = _test_assert_clone(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.assertClone(input),
    DynamicTree.SPOILERS,
);

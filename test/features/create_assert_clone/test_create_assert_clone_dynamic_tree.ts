import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_dynamic_tree = _test_assert_clone(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createAssertClone<DynamicTree>(),
    DynamicTree.SPOILERS,
);

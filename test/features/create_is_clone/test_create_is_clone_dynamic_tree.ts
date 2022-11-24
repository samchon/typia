import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_dynamic_tree = _test_is_clone(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createIsClone<DynamicTree>(),
    DynamicTree.SPOILERS,
);

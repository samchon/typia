import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_dynamic_tree = _test_is_clone(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.isClone(input),
    DynamicTree.SPOILERS,
);

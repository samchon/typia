import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_clone } from "./_test_clone";

export const test_clone_dynamic_tree = _test_clone(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.clone(input),
);

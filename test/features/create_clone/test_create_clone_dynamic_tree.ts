import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_dynamic_tree = _test_clone(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createClone<DynamicTree>(),
);

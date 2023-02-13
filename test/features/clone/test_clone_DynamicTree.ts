import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_DynamicTree = _test_clone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.clone(input),
);
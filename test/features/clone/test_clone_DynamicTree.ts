import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_clone_DynamicTree = _test_clone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.clone(input),
);

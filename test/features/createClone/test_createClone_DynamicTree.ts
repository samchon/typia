import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_DynamicTree = _test_clone(
    "DynamicTree",
    DynamicTree.generate,
    typia.createClone<DynamicTree>(),
);

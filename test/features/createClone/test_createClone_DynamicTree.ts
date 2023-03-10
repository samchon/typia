import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createClone_DynamicTree = _test_clone(
    "DynamicTree",
    DynamicTree.generate,
    typia.createClone<DynamicTree>(),
);

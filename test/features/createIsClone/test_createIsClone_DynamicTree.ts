import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createIsClone_DynamicTree = _test_isClone(
    "DynamicTree",
    DynamicTree.generate,
    typia.createIsClone<DynamicTree>(),
    DynamicTree.SPOILERS,
);

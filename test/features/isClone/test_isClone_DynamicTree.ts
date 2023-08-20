import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_isClone_DynamicTree = _test_isClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.isClone<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

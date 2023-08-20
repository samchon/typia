import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_validateClone_DynamicTree = _test_validateClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.validateClone<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

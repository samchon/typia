import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createValidateClone_DynamicTree = _test_validateClone(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidateClone<DynamicTree>(),
    DynamicTree.SPOILERS,
);

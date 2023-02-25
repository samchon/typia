import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_DynamicTree = _test_validateClone(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidateClone<DynamicTree>(),
    DynamicTree.SPOILERS,
);

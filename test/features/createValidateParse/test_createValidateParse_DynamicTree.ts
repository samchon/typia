import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_createValidateParse_DynamicTree = _test_validateParse(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidateParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);

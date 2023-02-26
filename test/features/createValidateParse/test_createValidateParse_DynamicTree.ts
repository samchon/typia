import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createValidateParse_DynamicTree = _test_validateParse(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidateParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);

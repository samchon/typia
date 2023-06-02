import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createValidateStringify_DynamicTree = _test_validateStringify(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidateStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

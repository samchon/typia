import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_DynamicTree = _test_validateStringify(
    "DynamicTree",
    DynamicTree.generate,
    typia.createValidateStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createIsStringify_DynamicTree = _test_isStringify(
    "DynamicTree",
    DynamicTree.generate,
    typia.createIsStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

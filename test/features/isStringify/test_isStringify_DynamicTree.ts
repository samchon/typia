import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_isStringify_DynamicTree = _test_isStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.isStringify<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

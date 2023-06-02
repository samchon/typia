import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_validateStringify_DynamicTree = _test_validateStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.validateStringify(input),
    DynamicTree.SPOILERS,
);

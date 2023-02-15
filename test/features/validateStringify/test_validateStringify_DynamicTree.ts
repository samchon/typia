import typia from "typia";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_DynamicTree = _test_validateStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.validateStringify(input),
    DynamicTree.SPOILERS,
);

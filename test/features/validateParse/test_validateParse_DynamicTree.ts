import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_DynamicTree = _test_validateParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.validateParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

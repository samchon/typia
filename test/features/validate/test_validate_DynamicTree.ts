import typia from "typia";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_DynamicTree = _test_validate(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.validate(input),
    DynamicTree.SPOILERS,
);

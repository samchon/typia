import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is } from "../../internal/_test_is";

export const test_is_DynamicTree = _test_is(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.is(input),
    DynamicTree.SPOILERS,
);

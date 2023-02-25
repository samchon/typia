import typia from "../../../src";

import { DynamicTree } from "../../structures/DynamicTree";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicTree = _test_stringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.stringify(input),
);

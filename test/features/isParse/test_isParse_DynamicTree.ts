import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicTree = _test_isParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => typia.isParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

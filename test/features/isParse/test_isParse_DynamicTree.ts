import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicTree = _test_isParse(
    "DynamicTree",
    DynamicTree.generate,
    (input) => TSON.isParse<DynamicTree>(input),
    DynamicTree.SPOILERS,
);

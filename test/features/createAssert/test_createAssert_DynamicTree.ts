import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicTree = _test_assert(
    "DynamicTree",
    DynamicTree.generate,
    TSON.createAssert<DynamicTree>(),
    DynamicTree.SPOILERS,
);

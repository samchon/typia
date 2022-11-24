import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_dynamic_tree = _test_assert(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createAssert<DynamicTree>(),
    DynamicTree.SPOILERS,
);

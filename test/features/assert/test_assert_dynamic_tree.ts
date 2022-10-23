import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_tree = _test_assert(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.assertType(input),
    DynamicTree.SPOILERS,
);

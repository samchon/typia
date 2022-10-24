import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert_stringify } from "./_test_assert_stringify";

export const test_assert_stringify_dynamic_tree = _test_assert_stringify(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.assertStringify(input),
    DynamicTree.SPOILERS,
);

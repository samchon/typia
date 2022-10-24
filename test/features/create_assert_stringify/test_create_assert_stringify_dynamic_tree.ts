import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_tree = _test_assert_stringify(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createAssertStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

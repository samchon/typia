import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is } from "../internal/_test_is";

export const test_create_is_dynamic_tree = _test_is(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createIs<DynamicTree>(),
    DynamicTree.SPOILERS,
);

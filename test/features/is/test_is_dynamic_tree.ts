import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is } from "../internal/_test_is";

export const test_is_dynamic_tree = _test_is(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.is(input),
    DynamicTree.SPOILERS,
);

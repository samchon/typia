import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_dynamic_tree = _test_is_stringify(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.isStringify(input),
    DynamicTree.SPOILERS,
);

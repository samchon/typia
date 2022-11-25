import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_dynamic_tree = _test_stringify(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.stringify(input),
);

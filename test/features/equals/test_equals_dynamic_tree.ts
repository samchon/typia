import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_equals } from "./_test_equals";

export const test_equals_dynamic_tree = _test_equals(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.equals(input),
    0,
);

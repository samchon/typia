import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_tree = _test_equals(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createEquals<DynamicTree>(),
    0,
);

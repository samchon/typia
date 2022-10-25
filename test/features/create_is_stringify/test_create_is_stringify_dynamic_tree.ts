import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_dynamic_tree = _test_is_stringify(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createIsStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

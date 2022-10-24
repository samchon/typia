import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_dynamic_tree = _test_stringify(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createStringify<DynamicTree>(),
);

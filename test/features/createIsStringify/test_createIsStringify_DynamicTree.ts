import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_DynamicTree = _test_isStringify(
    "DynamicTree",
    DynamicTree.generate,
    TSON.createIsStringify<DynamicTree>(),
    DynamicTree.SPOILERS,
);

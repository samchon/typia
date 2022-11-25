import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_DynamicTree = _test_isStringify(
    "DynamicTree",
    DynamicTree.generate,
    (input) => TSON.isStringify(input),
    DynamicTree.SPOILERS,
);

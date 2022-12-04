import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_DynamicTree = _test_validateClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => TSON.validateClone(input),
    DynamicTree.SPOILERS,
);

import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_DynamicTree = _test_isClone(
    "DynamicTree",
    DynamicTree.generate,
    (input) => TSON.isClone(input),
    DynamicTree.SPOILERS,
);
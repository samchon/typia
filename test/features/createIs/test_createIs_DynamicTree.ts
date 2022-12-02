import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicTree = _test_is(
    "DynamicTree",
    DynamicTree.generate,
    TSON.createIs<DynamicTree>(),
    DynamicTree.SPOILERS,
);

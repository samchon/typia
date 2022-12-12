import typia from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is } from "../internal/_test_is";

export const test_createIs_DynamicTree = _test_is(
    "DynamicTree",
    DynamicTree.generate,
    typia.createIs<DynamicTree>(),
    DynamicTree.SPOILERS,
);
import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createIsParse_DynamicTree = _test_isParse(
    "DynamicTree",
    DynamicTree.generate,
    typia.createIsParse<DynamicTree>(),
    DynamicTree.SPOILERS,
);

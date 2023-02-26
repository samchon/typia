import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createAssertClone_DynamicTree = _test_assertClone(
    "DynamicTree",
    DynamicTree.generate,
    typia.createAssertClone<DynamicTree>(),
    DynamicTree.SPOILERS,
);

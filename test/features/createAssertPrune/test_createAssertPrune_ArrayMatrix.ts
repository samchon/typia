import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_createAssertPrune_ArrayMatrix = _test_assertPrune(
    "ArrayMatrix",
    ArrayMatrix.generate,
    typia.createAssertPrune<ArrayMatrix>(),
    ArrayMatrix.SPOILERS,
);

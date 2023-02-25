import typia from "../../../src";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ArrayUnion = _test_assertPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertPrune<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);

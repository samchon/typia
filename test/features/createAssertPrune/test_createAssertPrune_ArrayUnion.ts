import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_createAssertPrune_ArrayUnion = _test_assertPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    typia.createAssertPrune<ArrayUnion>(),
    ArrayUnion.SPOILERS,
);

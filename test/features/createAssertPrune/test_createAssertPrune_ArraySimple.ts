import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_createAssertPrune_ArraySimple = _test_assertPrune(
    "ArraySimple",
    ArraySimple.generate,
    typia.createAssertPrune<ArraySimple>(),
    ArraySimple.SPOILERS,
);

import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_ArraySimple = _test_assertPrune(
    "ArraySimple",
    ArraySimple.generate,
    (input) => typia.assertPrune(input),
    ArraySimple.SPOILERS,
);
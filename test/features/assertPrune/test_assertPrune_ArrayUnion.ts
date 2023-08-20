import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_assertPrune_ArrayUnion = _test_assertPrune(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) => typia.assertPrune<ArrayUnion>(input),
    ArrayUnion.SPOILERS,
);

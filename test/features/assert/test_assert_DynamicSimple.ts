import typia from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicSimple = _test_assert(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) => typia.assert(input),
    DynamicSimple.SPOILERS,
);

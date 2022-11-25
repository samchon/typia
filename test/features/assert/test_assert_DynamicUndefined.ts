import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicUndefined = _test_assert(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => TSON.assert(input),
    DynamicUndefined.SPOILERS,
);
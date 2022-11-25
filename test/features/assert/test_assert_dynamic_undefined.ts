import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_dynamic_undefined = _test_assert(
    "dynamic tree",
    DynamicUndefined.generate,
    (input) => TSON.assert(input),
    DynamicUndefined.SPOILERS,
);

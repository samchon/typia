import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_DynamicNever = _test_assert(
    "DynamicNever",
    DynamicNever.generate,
    (input) => TSON.assert(input),
    DynamicNever.SPOILERS,
);

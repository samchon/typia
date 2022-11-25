import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ToJsonArray = _test_assert(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => TSON.assert(input),
);
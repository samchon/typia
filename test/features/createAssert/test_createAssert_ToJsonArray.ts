import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_ToJsonArray = _test_assert(
    "ToJsonArray",
    ToJsonArray.generate,
    TSON.createAssert<ToJsonArray>(),
);
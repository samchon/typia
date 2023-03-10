import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssert_ToJsonArray = _test_assert(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createAssert<ToJsonArray>(),
);

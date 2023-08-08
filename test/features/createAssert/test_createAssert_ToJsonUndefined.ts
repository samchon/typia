import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUndefined } from "../../structures/ToJsonUndefined";

export const test_assert_ToJsonUndefined = _test_assert(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createAssert<ToJsonUndefined>(),
);

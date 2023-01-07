import typia from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_ToJsonArray = _test_assertEquals(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createAssertEquals<ToJsonArray>(),
);
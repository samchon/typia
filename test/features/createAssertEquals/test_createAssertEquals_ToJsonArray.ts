import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createAssertEquals_ToJsonArray = _test_assertEquals(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.createAssertEquals<ToJsonArray>());

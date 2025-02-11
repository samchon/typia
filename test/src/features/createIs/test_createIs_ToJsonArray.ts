import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_createIs_ToJsonArray = _test_is(
    "ToJsonArray",
)<ToJsonArray>(
    ToJsonArray
)(typia.createIs<ToJsonArray>());

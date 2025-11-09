import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_createEquals_ToJsonNull = (): void => _test_equals(
    "ToJsonNull",
)<ToJsonNull>(
    ToJsonNull
)(typia.createEquals<ToJsonNull>());

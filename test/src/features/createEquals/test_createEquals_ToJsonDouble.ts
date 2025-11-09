import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createEquals_ToJsonDouble = (): void => _test_equals(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)(typia.createEquals<ToJsonDouble>());

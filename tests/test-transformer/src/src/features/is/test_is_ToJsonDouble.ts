import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_is_ToJsonDouble = (): void => _test_is(
    "ToJsonDouble",
)<ToJsonDouble>(
    ToJsonDouble
)((input) => typia.is<ToJsonDouble>(input));

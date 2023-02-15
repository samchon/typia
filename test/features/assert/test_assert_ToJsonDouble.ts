import typia from "typia";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ToJsonDouble = _test_assert(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.assert(input),
);

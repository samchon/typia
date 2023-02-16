import typia from "typia";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ToJsonUnion = _test_assert(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.assert(input),
);

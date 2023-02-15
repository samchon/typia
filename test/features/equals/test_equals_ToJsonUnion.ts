import typia from "typia";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonUnion = _test_equals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.equals(input),
);

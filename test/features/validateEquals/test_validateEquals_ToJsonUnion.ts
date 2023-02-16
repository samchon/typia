import typia from "typia";

import { ToJsonUnion } from "../../structures/ToJsonUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ToJsonUnion = _test_validateEquals(
    "ToJsonUnion",
    ToJsonUnion.generate,
    (input) => typia.validateEquals(input),
);

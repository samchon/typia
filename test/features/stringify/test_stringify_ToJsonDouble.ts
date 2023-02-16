import typia from "typia";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ToJsonDouble = _test_stringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.stringify(input),
);

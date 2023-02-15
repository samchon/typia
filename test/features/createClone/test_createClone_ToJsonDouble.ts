import typia from "typia";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ToJsonDouble = _test_clone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createClone<ToJsonDouble>(),
);

import typia from "typia";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ToJsonDouble = _test_is(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createIs<ToJsonDouble>(),
);

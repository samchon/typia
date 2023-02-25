import typia from "../../../src";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ToJsonDouble = _test_isClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createIsClone<ToJsonDouble>(),
);

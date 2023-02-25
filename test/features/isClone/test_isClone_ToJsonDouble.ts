import typia from "../../../src";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ToJsonDouble = _test_isClone(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) => typia.isClone(input),
);

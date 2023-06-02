import typia from "../../../src";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ToJsonNull = _test_assertClone(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.assertClone(input),
);

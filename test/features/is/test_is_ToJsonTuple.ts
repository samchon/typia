import typia from "../../../src";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_is } from "../internal/_test_is";

export const test_is_ToJsonTuple = _test_is(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.is(input),
);

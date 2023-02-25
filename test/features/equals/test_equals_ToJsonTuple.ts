import typia from "../../../src";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonTuple = _test_equals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.equals(input),
);

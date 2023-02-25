import typia from "../../../src";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ToJsonTuple = _test_validateClone(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.validateClone(input),
);

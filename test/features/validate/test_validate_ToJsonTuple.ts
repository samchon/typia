import typia from "typia";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ToJsonTuple = _test_validate(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.validate(input),
);

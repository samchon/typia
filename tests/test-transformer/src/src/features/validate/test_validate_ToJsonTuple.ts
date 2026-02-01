import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_validate_ToJsonTuple = (): void => _test_validate(
    "ToJsonTuple",
)<ToJsonTuple>(
    ToJsonTuple
)((input) => typia.validate<ToJsonTuple>(input));

import typia from "typia";

import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ToJsonUndefined = _test_validate(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    (input) => typia.validate(input),
);

import typia from "typia";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_ToJsonNull = _test_validateStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.validateStringify(input),
);

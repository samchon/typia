import typia from "typia";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ToJsonArray = _test_isStringify(
    "ToJsonArray",
    ToJsonArray.generate,
    (input) => typia.isStringify(input),
);

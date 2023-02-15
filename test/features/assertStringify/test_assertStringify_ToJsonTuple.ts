import typia from "typia";

import { ToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ToJsonTuple = _test_assertStringify(
    "ToJsonTuple",
    ToJsonTuple.generate,
    (input) => typia.assertStringify(input),
);

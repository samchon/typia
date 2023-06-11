import typia from "../../../src";

import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_ToJsonNull = _test_assertStringify(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) => typia.assertStringify(input),
);

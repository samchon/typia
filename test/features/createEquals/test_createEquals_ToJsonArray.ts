import typia from "../../../src";

import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_ToJsonArray = _test_equals(
    "ToJsonArray",
    ToJsonArray.generate,
    typia.createEquals<ToJsonArray>(),
);

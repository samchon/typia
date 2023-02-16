import typia from "typia";

import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_DynamicUndefined = _test_stringify(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) => typia.stringify(input),
);

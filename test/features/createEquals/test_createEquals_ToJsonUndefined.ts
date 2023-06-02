import typia from "../../../src";

import { ToJsonUndefined } from "../../structures/ToJsonUndefined";
import { _test_equals } from "../../internal/_test_equals";

export const test_createEquals_ToJsonUndefined = _test_equals(
    "ToJsonUndefined",
    ToJsonUndefined.generate,
    typia.createEquals<ToJsonUndefined>(),
);

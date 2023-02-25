import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicNever = _test_assert(
    "DynamicNever",
    DynamicNever.generate,
    typia.createAssert<DynamicNever>(),
    DynamicNever.SPOILERS,
);

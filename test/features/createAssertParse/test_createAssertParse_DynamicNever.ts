import typia from "typia";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_DynamicNever = _test_assertParse(
    "DynamicNever",
    DynamicNever.generate,
    typia.createAssertParse<DynamicNever>(),
    DynamicNever.SPOILERS,
);

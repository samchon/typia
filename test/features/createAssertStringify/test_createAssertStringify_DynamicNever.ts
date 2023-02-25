import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicNever = _test_assertStringify(
    "DynamicNever",
    DynamicNever.generate,
    typia.createAssertStringify<DynamicNever>(),
    DynamicNever.SPOILERS,
);

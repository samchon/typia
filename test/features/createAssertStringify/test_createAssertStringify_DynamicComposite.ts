import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_DynamicComposite = _test_assertStringify(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createAssertStringify<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);

import typia from "typia";

import { TemplateAtomic } from "../../structures/TemplateAtomic";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TemplateAtomic = _test_assertStringify(
    "TemplateAtomic",
    TemplateAtomic.generate,
    typia.createAssertStringify<TemplateAtomic>(),
    TemplateAtomic.SPOILERS,
);

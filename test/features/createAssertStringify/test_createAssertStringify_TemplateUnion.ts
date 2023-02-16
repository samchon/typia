import typia from "typia";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TemplateUnion = _test_assertStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    typia.createAssertStringify<TemplateUnion>(),
    TemplateUnion.SPOILERS,
);

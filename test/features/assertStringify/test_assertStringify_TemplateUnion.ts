import typia from "../../../src";

import { TemplateUnion } from "../../structures/TemplateUnion";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_assertStringify_TemplateUnion = _test_assertStringify(
    "TemplateUnion",
    TemplateUnion.generate,
    (input) => typia.assertStringify(input),
    TemplateUnion.SPOILERS,
);

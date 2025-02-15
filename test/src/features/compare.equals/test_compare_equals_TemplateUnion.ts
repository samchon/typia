import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_compare_equals_TemplateUnion = _test_compare_equals(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((a, b) => typia.compare.equals<TemplateUnion>(a, b));

import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_compare_equals_TemplateAtomic = _test_compare_equals(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)((a, b) => typia.compare.equals<TemplateAtomic>(a, b));

import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_compare_equals_TemplateConstant = _test_compare_equals(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((a, b) => typia.compare.equals<TemplateConstant>(a, b));

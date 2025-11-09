import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_is_TemplateConstant = (): void => _test_is(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.is<TemplateConstant>(input));

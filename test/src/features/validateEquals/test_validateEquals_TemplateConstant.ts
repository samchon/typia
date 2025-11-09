import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_validateEquals_TemplateConstant = (): void => _test_validateEquals(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.validateEquals<TemplateConstant>(input));

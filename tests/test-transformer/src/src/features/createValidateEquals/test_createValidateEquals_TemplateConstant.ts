import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidateEquals_TemplateConstant = (): void => _test_validateEquals(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.createValidateEquals<TemplateConstant>());

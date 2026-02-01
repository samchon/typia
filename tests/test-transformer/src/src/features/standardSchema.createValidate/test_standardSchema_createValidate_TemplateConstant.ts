import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_standardSchema_createValidate_TemplateConstant = (): void => _test_standardSchema_validate(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.createValidate<TemplateConstant>());

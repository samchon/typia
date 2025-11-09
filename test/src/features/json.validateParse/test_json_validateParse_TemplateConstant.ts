import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_validateParse_TemplateConstant = (): void => _test_json_validateParse(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.json.validateParse<TemplateConstant>(input));

import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_validateStringify_TemplateConstant = (): void => _test_json_validateStringify(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.json.validateStringify<TemplateConstant>(input));

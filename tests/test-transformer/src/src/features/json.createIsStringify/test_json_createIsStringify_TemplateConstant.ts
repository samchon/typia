import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createIsStringify_TemplateConstant = (): void => _test_json_isStringify(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.json.createIsStringify<TemplateConstant>());

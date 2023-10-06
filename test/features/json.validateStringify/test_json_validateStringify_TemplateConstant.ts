import typia from "../../../src";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_validateStringify_TemplateConstant = _test_json_validateStringify(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.json.validateStringify<TemplateConstant>(input));

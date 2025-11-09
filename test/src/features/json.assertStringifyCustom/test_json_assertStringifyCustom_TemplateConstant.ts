import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertStringifyCustom_TemplateConstant = (): void => _test_json_assertStringify(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)((input) => typia.json.assertStringify<TemplateConstant>(input, (p) => new CustomGuardError(p)));

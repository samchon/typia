import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_createAssertStringifyCustom_TemplateConstant = (): void => _test_json_assertStringify(CustomGuardError)(
    "TemplateConstant",
)<TemplateConstant>(
    TemplateConstant
)(typia.json.createAssertStringify<TemplateConstant>((p) => new CustomGuardError(p)));

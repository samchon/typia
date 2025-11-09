import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertStringify_TemplateUnion = (): void => _test_json_assertStringify(TypeGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.json.createAssertStringify<TemplateUnion>());

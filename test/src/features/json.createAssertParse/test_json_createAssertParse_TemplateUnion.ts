import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_json_createAssertParse_TemplateUnion = (): void => _test_json_assertParse(TypeGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)(typia.json.createAssertParse<TemplateUnion>());

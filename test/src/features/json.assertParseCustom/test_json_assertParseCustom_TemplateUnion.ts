import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TemplateUnion = (): void => _test_json_assertParse(CustomGuardError)(
    "TemplateUnion",
)<TemplateUnion>(
    TemplateUnion
)((input) => typia.json.assertParse<TemplateUnion>(input, (p) => new CustomGuardError(p)));

import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_json_assertParseCustom_TemplateAtomic = (): void => _test_json_assertParse(CustomGuardError)(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)((input) => typia.json.assertParse<TemplateAtomic>(input, (p) => new CustomGuardError(p)));

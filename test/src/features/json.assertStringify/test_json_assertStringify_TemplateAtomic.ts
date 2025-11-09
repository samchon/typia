import typia from "typia";

import { _test_json_assertStringify } from "../../internal/_test_json_assertStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_json_assertStringify_TemplateAtomic = (): void => _test_json_assertStringify(TypeGuardError)(
    "TemplateAtomic",
)<TemplateAtomic>(
    TemplateAtomic
)((input) => typia.json.assertStringify<TemplateAtomic>(input));

import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_json_assertParse_TemplateAtomic = _test_json_assertParse(
  TypeGuardError,
)("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.json.assertParse<TemplateAtomic>(input),
);

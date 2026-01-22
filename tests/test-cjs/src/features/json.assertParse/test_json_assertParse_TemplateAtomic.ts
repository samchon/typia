import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_assertParse_TemplateAtomic = (): void =>
  _test_json_assertParse(TypeGuardError)("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) => typia.json.assertParse<TemplateAtomic>(input));

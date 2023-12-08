import typia from "typia";

import { _test_json_validateStringify } from "../../internal/_test_json_validateStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_validateStringify_TemplateAtomic =
  _test_json_validateStringify("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )((input) => typia.json.validateStringify<TemplateAtomic>(input));

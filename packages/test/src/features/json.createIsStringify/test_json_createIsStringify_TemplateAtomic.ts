import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createIsStringify_TemplateAtomic =
  _test_json_isStringify("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.json.createIsStringify<TemplateAtomic>(),
  );

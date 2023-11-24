import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createAssertParse_TemplateAtomic =
  _test_json_assertParse("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.json.createAssertParse<TemplateAtomic>(),
  );

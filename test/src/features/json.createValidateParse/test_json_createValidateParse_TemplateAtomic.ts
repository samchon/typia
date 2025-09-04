import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_createValidateParse_TemplateAtomic = (): void =>
  _test_json_validateParse("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    typia.json.createValidateParse<TemplateAtomic>(),
  );

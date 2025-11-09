import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_isParse_TemplateAtomic = (): void =>
  _test_json_isParse("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    (input) => typia.json.isParse<TemplateAtomic>(input),
  );

import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validateEquals_TemplateAtomic = (): void =>
  _test_validateEquals("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)(
    (input) => typia.validateEquals<TemplateAtomic>(input),
  );

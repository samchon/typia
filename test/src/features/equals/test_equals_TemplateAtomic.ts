import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_equals_TemplateAtomic = (): void =>
  _test_equals("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
    typia.equals<TemplateAtomic>(input),
  );

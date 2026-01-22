import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_is_TemplateAtomic = (): void =>
  _test_is("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
    typia.is<TemplateAtomic>(input),
  );

import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_validate_TemplateAtomic = (): void =>
  _test_validate("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)((input) =>
    typia.validate<TemplateAtomic>(input),
  );

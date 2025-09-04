import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_standardSchema_createValidate_TemplateAtomic = (): void =>
  _test_standardSchema_validate("TemplateAtomic")<TemplateAtomic>(
    TemplateAtomic,
  )(typia.createValidate<TemplateAtomic>());

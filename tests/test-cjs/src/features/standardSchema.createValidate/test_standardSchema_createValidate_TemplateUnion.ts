import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_standardSchema_createValidate_TemplateUnion = (): void =>
  _test_standardSchema_validate("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.createValidate<TemplateUnion>(),
  );

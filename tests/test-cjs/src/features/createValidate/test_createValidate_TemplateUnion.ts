import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createValidate_TemplateUnion = (): void =>
  _test_validate("TemplateUnion")<TemplateUnion>(TemplateUnion)(
    typia.createValidate<TemplateUnion>(),
  );

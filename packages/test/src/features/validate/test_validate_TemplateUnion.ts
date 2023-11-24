import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_validate_TemplateUnion = _test_validate(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.validate<TemplateUnion>(input),
);

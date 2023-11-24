import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_is_TemplateUnion = _test_is("TemplateUnion")<TemplateUnion>(
  TemplateUnion,
)((input) => typia.is<TemplateUnion>(input));

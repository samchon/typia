import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createRandom_TemplateConstant = _test_random("TemplateConstant")<TemplateConstant>(
    TemplateConstant
)({
  random: typia.createRandom<TemplateConstant>((TemplateConstant as any).RANDOM),
  assert: typia.createAssert<TemplateConstant>(),
});

import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createRandom_TemplateUnion = (): void => _test_random("TemplateUnion")<TemplateUnion>(
    TemplateUnion
)({
  random: typia.createRandom<TemplateUnion>((TemplateUnion as any).RANDOM),
  assert: typia.createAssert<TemplateUnion>(),
});

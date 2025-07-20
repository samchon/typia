import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createRandom_TemplateAtomic = (): void =>
  _test_random("TemplateAtomic")<TemplateAtomic>(TemplateAtomic)({
    random: typia.createRandom<TemplateAtomic>((TemplateAtomic as any).RANDOM),
    assert: typia.createAssert<TemplateAtomic>(),
  });

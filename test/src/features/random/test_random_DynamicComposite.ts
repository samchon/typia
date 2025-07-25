import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_random_DynamicComposite = (): void =>
  _test_random("DynamicComposite")<DynamicComposite>(DynamicComposite)({
    random: () =>
      typia.random<DynamicComposite>((DynamicComposite as any).RANDOM),
    assert: typia.createAssert<DynamicComposite>(),
  });

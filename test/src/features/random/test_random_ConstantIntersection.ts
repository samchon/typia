import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_random_ConstantIntersection = (): void =>
  _test_random("ConstantIntersection")<ConstantIntersection>(
    ConstantIntersection,
  )({
    random: () =>
      typia.random<ConstantIntersection>((ConstantIntersection as any).RANDOM),
    assert: typia.createAssert<ConstantIntersection>(),
  });

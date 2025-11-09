import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_random_DynamicSimple = (): void =>
  _test_random("DynamicSimple")<DynamicSimple>(DynamicSimple)({
    random: () => typia.random<DynamicSimple>((DynamicSimple as any).RANDOM),
    assert: typia.createAssert<DynamicSimple>(),
  });

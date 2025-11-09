import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_random_InstanceUnion = (): void =>
  _test_random("InstanceUnion")<InstanceUnion>(InstanceUnion)({
    random: () => typia.random<InstanceUnion>((InstanceUnion as any).RANDOM),
    assert: typia.createAssert<InstanceUnion>(),
  });

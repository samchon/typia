import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { NativeUnion } from "../../structures/NativeUnion";

export const test_random_NativeUnion = (): void =>
  _test_random("NativeUnion")<NativeUnion>(NativeUnion)({
    random: () => typia.random<NativeUnion>((NativeUnion as any).RANDOM),
    assert: typia.createAssert<NativeUnion>(),
  });

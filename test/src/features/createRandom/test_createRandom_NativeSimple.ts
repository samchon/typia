import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_createRandom_NativeSimple = (): void =>
  _test_random("NativeSimple")<NativeSimple>(NativeSimple)({
    random: typia.createRandom<NativeSimple>((NativeSimple as any).RANDOM),
    assert: typia.createAssert<NativeSimple>(),
  });

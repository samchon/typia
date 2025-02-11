import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_createRandom_ObjectHttpUndefindable = _test_random("ObjectHttpUndefindable")<ObjectHttpUndefindable>(
    ObjectHttpUndefindable
)({
  random: typia.createRandom<ObjectHttpUndefindable>((ObjectHttpUndefindable as any).RANDOM),
  assert: typia.createAssert<ObjectHttpUndefindable>(),
});

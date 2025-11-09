import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_createRandom_ClassNonPublic = (): void => _test_random("ClassNonPublic")<ClassNonPublic>(
    ClassNonPublic
)({
  random: typia.createRandom<ClassNonPublic>((ClassNonPublic as any).RANDOM),
  assert: typia.createAssert<ClassNonPublic>(),
});

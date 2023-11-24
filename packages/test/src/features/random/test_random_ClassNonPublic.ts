import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ClassNonPublic } from "../../structures/ClassNonPublic";

export const test_random_ClassNonPublic = _test_random(
  "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
  random: () => typia.random<ClassNonPublic>((ClassNonPublic as any).RANDOM),
  assert: typia.createAssert<ClassNonPublic>(),
});

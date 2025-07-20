import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createRandom_ClassMethod = (): void =>
  _test_random("ClassMethod")<ClassMethod>(ClassMethod)({
    random: typia.createRandom<ClassMethod>((ClassMethod as any).RANDOM),
    assert: typia.createAssert<ClassMethod>(),
  });

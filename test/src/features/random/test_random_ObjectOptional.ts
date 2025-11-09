import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_random_ObjectOptional = (): void =>
  _test_random("ObjectOptional")<ObjectOptional>(ObjectOptional)({
    random: () => typia.random<ObjectOptional>((ObjectOptional as any).RANDOM),
    assert: typia.createAssert<ObjectOptional>(),
  });

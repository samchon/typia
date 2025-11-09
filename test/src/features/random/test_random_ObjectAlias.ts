import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_random_ObjectAlias = (): void =>
  _test_random("ObjectAlias")<ObjectAlias>(ObjectAlias)({
    random: () => typia.random<ObjectAlias>((ObjectAlias as any).RANDOM),
    assert: typia.createAssert<ObjectAlias>(),
  });

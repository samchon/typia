import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_random_ObjectUnionExplicitPointer = (): void => _test_random("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)({
  random: () => typia.random<ObjectUnionExplicitPointer>((ObjectUnionExplicitPointer as any).RANDOM),
  assert: typia.createAssert<ObjectUnionExplicitPointer>(),
});

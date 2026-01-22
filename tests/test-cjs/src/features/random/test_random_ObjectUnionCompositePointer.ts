import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_random_ObjectUnionCompositePointer = (): void =>
  _test_random("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer,
  )({
    random: () =>
      typia.random<ObjectUnionCompositePointer>(
        (ObjectUnionCompositePointer as any).RANDOM,
      ),
    assert: typia.createAssert<ObjectUnionCompositePointer>(),
  });

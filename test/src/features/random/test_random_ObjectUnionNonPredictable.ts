import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_random_ObjectUnionNonPredictable = (): void =>
  _test_random("ObjectUnionNonPredictable")<ObjectUnionNonPredictable>(
    ObjectUnionNonPredictable,
  )({
    random: () =>
      typia.random<ObjectUnionNonPredictable>(
        (ObjectUnionNonPredictable as any).RANDOM,
      ),
    assert: typia.createAssert<ObjectUnionNonPredictable>(),
  });

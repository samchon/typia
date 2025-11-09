import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertGuardEquals_ObjectUnionNonPredictable =
  (): void =>
    _test_assertGuardEquals(TypeGuardError)(
      "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
      typia.createAssertGuardEquals<ObjectUnionNonPredictable>(),
    );

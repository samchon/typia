import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_createAssertEquals_ObjectUnionNonPredictable = (): void =>
  _test_assertEquals(TypeGuardError)(
    "ObjectUnionNonPredictable",
  )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)(
    typia.createAssertEquals<ObjectUnionNonPredictable>(),
  );
